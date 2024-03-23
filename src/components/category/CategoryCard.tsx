import React, { FC } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import CustomBackgroundImage from "@components/ui/BackgroundImage";
import { AppImages } from "@assets";
import { Colors, FontSizes, FontFamily } from "@theme";

const CategoryCard: FC = () => {
  return (
    <View style={styles.container}>
      <CustomBackgroundImage
        imageSource={AppImages.category}
        customStyle={styles.backgroundImageCustom}
        imageStyle={styles.backgroundImage}>
        <Text style={styles.title}>Deals</Text>
      </CustomBackgroundImage>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 50,
    height: 150,
  },
  backgroundImageCustom: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderRadius: 8,
  },
  title: {
    color: Colors.white,
    marginTop: 10,
    justifyContent: "flex-start",
    fontSize: FontSizes.size28,
    fontFamily: FontFamily.Rubik.Medium,
  },
  backgroundImage: {
    borderRadius: 8,
  },
});
