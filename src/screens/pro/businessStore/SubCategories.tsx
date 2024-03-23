import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppNavigation } from "@hooks/index";
import { Colors } from "@theme/colors";
import { hp, wp } from "@utils/responsive";
import { AntDesign } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";
import { AppSvgs } from "@assets/index";
import { FontFamily } from "@theme/fonts";

const SubCategories = () => {
  const { top } = useSafeAreaInsets();
  const { navigation } = useAppNavigation();

  const SubCategoriesItem = [
    {
      name: "T-Shirts",
      image:
        "https://images.unsplash.com/photo-1570751057973-1b84c959ff86?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sweats",
      image:
        "https://images.unsplash.com/photo-1570751057973-1b84c959ff86?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Jackets",
      image:
        "https://images.unsplash.com/photo-1570751057973-1b84c959ff86?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Jeans",
      image:
        "https://images.unsplash.com/photo-1570751057973-1b84c959ff86?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Overalls",
      image:
        "https://images.unsplash.com/photo-1570751057973-1b84c959ff86?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Skirts",
      image:
        "https://images.unsplash.com/photo-1570751057973-1b84c959ff86?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <View style={styles.hederRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={wp(6)} color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity>
          <SvgUri uri={AppSvgs.search1} />
        </TouchableOpacity>
      </View>
      <Text style={styles.hairText}>
        HAIR •<Text style={styles.servicesText}> SERVICES</Text>
      </Text>
      <View style={styles.line} />
      <FlatList
        data={SubCategoriesItem}
        ItemSeparatorComponent={() => <View style={styles.line1} />}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={styles.row}
              onPress={() => navigation.navigate("ProductList")}>
              <Image source={{ uri: item?.image }} style={styles.image} />
              <Text style={styles.item}>{item?.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default SubCategories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark1,
    flex: 1,
  },
  hederRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: wp(5),
  },
  hairText: {
    color: Colors.gray700,
    fontFamily: FontFamily.Rubik.Medium,
    fontSize: 18,
    marginHorizontal: wp(5),
    marginVertical: hp(2),
  },
  servicesText: {
    color: Colors.white,
  },
  line: {
    borderWidth: 0.3,
    borderColor: Colors.gray600,
  },
  image: {
    width: wp(15),
    height: wp(15),
    borderRadius: 50,
  },
  item: {
    color: Colors.white,
    fontFamily: FontFamily.Rubik.SemiBold,
    fontSize: 16,
    marginLeft: wp(3),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: hp(2),
    marginHorizontal: wp(5),
  },
  line1: {
    width: wp(90),
    height: hp(0.06),
    alignSelf: "center",
    backgroundColor: Colors.gray700,
  },
});
