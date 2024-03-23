import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors } from "@theme/colors";
import { AppImages, AppSvgs } from "@assets/index";
import { hp, wp } from "@utils/responsive";
import { useAppNavigation } from "@hooks/index";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";
import { FontFamily } from "@theme/fonts";

const Collection = () => {
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
    <View style={styles.container}>
      <ImageBackground
        source={AppImages.serviceBg}
        resizeMode="cover"
        style={styles.image}>
        <View style={[styles.mainHeaderRow, { marginTop: top }]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={wp(6)} color={Colors.white} />
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{ marginRight: wp(5) }}
              onPress={() => navigation.navigate("CategoriesStore")}>
              <SvgUri uri={AppSvgs.filters} />
            </TouchableOpacity>
            <TouchableOpacity>
              <SvgUri uri={AppSvgs.search1} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.title}>Winter Collection</Text>
          <Text style={styles.itemText}>30 items</Text>
        </View>
      </ImageBackground>
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

export default Collection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark1,
    flex: 1,
  },
  image: {
    width: wp(100),
    height: hp(50),
  },
  mainHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: wp(5),
  },
  title: {
    color: Colors.white,
    fontFamily: FontFamily.Poppins.Bold,
    fontSize: 30,
  },
  itemText: {
    color: Colors.white,
    fontFamily: FontFamily.Poppins.Medium,
    fontSize: 15,
  },
  bottom: {
    position: "absolute",
    bottom: hp(2),
    marginHorizontal: wp(5),
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
