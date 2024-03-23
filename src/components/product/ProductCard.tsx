import React, { FC } from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { AppImages } from "@assets";
import { FontFamily, FontSizes, Colors } from "@theme";
import { hp, wp } from "@utils/responsive";

const ProductCard: FC = () => {
  return (
    <View>
      <Image style={styles.image} source={AppImages.proProfileBackground} />
      <Text style={styles.title}>Relaxing Facial</Text>
      <Text style={styles.price}>$30</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  image: {
    height: hp(21),
    width: wp(41),
    borderRadius: 8,
  },
  title: {
    color: Colors.white,
    marginTop: hp(1),
    fontFamily: FontFamily.Rubik.Medium,
    fontSize: FontSizes.size16,
  },
  price: {
    color: "#55575A",
    marginTop: hp(0.6),
    fontFamily: FontFamily.Rubik.Medium,
    fontSize: FontSizes.size14,
  },
});
