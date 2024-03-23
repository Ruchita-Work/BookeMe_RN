import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AppImages } from "@assets";
import { hp, wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";

interface IAddServiceProductItemProps {
  isSelected: boolean;
}

const AddServiceProductItem: FC<IAddServiceProductItemProps> = ({
  isSelected = false,
}) => {
  return (
    <View style={styles.container}>
      <Image
        style={[styles.image, !!isSelected && { borderWidth: wp(0.7) }]}
        resizeMode="cover"
        source={AppImages.dummyProductImage}
      />
      <Text style={styles.title}>Jordan 1</Text>
    </View>
  );
};

export default AddServiceProductItem;

const styles = StyleSheet.create({
  image: {
    height: hp(11),
    width: wp(25),
    borderRadius: wp(2.5),
    borderColor: Colors.white,
  },
  container: {
    alignItems: "center",
    rowGap: hp(1),
  },
  title: {
    color: Colors.white,
    fontSize: FontSizes.size16,
    fontFamily: FontFamily.Inter.Regular,
  },
});
