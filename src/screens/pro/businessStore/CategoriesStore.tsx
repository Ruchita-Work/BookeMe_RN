import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors } from "@theme/colors";
import { SvgUri } from "react-native-svg";
import { AppSvgs } from "@assets/index";
import { AntDesign } from "@expo/vector-icons";
import { hp, wp } from "@utils/responsive";
import { useAppNavigation } from "@hooks/index";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontFamily } from "@theme/fonts";

const CategoriesStore = () => {
  const { top } = useSafeAreaInsets();
  const { navigation } = useAppNavigation();

  const CategoriesStore = [
    {
      name: "Deals",
      image:
        "https://images.unsplash.com/photo-1570751057973-1b84c959ff86?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Hair",
      image:
        "https://images.unsplash.com/photo-1570751057973-1b84c959ff86?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Shoes",
      image:
        "https://images.unsplash.com/photo-1570751057973-1b84c959ff86?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1570751057973-1b84c959ff86?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1570751057973-1b84c959ff86?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1570751057973-1b84c959ff86?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <View style={styles.hederRow}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={wp(6)} color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity>
          <SvgUri uri={AppSvgs.search1} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={CategoriesStore}
        style={{ marginTop: hp(3) }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("SubCategories")}>
              <ImageBackground
                source={{ uri: item?.image }}
                style={styles.image}
                borderRadius={5}
                resizeMode="cover">
                <Text style={styles.name}>{item?.name}</Text>
              </ImageBackground>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CategoriesStore;

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
  image: {
    width: wp(90),
    height: hp(20),
    alignSelf: "center",
    marginBottom: hp(2),
  },
  name: {
    color: Colors.white,
    fontFamily: FontFamily.Rubik.SemiBold,
    fontSize: 22,
    position: "absolute",
    bottom: hp(3),
    left: wp(5),
  },
});
