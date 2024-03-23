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
import { FontFamily } from "@theme/fonts";
import { AntDesign } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";
import { AppSvgs } from "@assets/index";

const ProductList = () => {
  const { top } = useSafeAreaInsets();
  const { navigation } = useAppNavigation();

  const collection = [
    {
      name: "Oversized sweater",
      price: "$30",
      image:
        "https://images.unsplash.com/photo-1570751057973-1b84c959ff86?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Turtleneck sweater",
      price: "$30",
      image:
        "https://images.unsplash.com/photo-1570751057973-1b84c959ff86?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Turtleneck sweater",
      price: "$30",
      image:
        "https://images.unsplash.com/photo-1570751057973-1b84c959ff86?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Oversized sweater",
      price: "$30",
      image:
        "https://images.unsplash.com/photo-1570751057973-1b84c959ff86?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Turtleneck sweater",
      price: "$30",
      image:
        "https://images.unsplash.com/photo-1570751057973-1b84c959ff86?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Turtleneck sweater",
      price: "$30",
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
      <View style={styles.textRowView}>
        <Text style={styles.hairText}>
          CLOTHING •<Text style={styles.servicesText}> T-SHIRT</Text>
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Filters")}>
          <SvgUri uri={AppSvgs.filters} />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <FlatList
        data={collection}
        numColumns={2}
        style={{ marginTop: hp(5) }}
        contentContainerStyle={{ alignSelf: "center" }}
        renderItem={({ item, index }) => {
          return (
            <View style={{ margin: wp(2) }}>
              <Image source={{ uri: item?.image }} style={styles.itemImage} />
              <Text style={styles.name}>{item?.name}</Text>
              <Text style={styles.price}>{item?.price}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ProductList;

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
  },
  servicesText: {
    color: Colors.white,
  },
  textRowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: wp(5),
    marginVertical: hp(2),
  },
  line: {
    borderWidth: 0.3,
    borderColor: Colors.gray600,
  },
  name: {
    color: Colors.white,
    fontFamily: FontFamily.Rubik.SemiBold,
    fontSize: 15,
    marginTop: hp(1),
  },
  price: {
    color: Colors.gray600,
    fontFamily: FontFamily.Rubik.SemiBold,
    marginTop: hp(0.5),
  },
  itemImage: {
    width: wp(44),
    height: hp(28),
    resizeMode: "cover",
    borderRadius: 8,
  },
});
