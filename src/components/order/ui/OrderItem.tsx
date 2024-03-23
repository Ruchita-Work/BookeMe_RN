import React, { FC } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AppImages } from "@assets";
import { hp, wp } from "@utils/responsive";
import AvatarImage from "@components/ui/AvatarImage";
import { FontFamily, FontSizes, Colors } from "@theme";

const OrderItem: FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.orderImage}
        source={AppImages.dummyProductImage}>
        <LinearGradient
          colors={["#00000000", "#00000040", "#00000070"]}
          locations={[0.3, 0.5, 0.7]}
          style={styles.orderImageGradient}
        />
      </ImageBackground>
      <View style={styles.body}>
        <Text style={styles.productName}>Product Name</Text>
        <View style={styles.customerInfoRow}>
          <AvatarImage size={wp(5)} image={AppImages.dummyProfileImage} />
          <Text style={styles.customerName}>Customer Name</Text>
        </View>
        <Text style={styles.orderSize}>Size: Medium</Text>
        <Text style={styles.shipOrder}>Ship Order</Text>
        <Text style={styles.quantity}>Quantity: 1</Text>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutral800,
    borderRadius: wp(3),
    flexDirection: "row",
    alignItems: "center",
  },
  orderImage: {
    height: hp(18.5),
    width: wp(29),
    borderRadius: wp(3),
    overflow: "hidden",
  },
  orderImageGradient: {
    height: "50%",
    marginTop: "auto",
  },
  body: {
    marginHorizontal: wp(3),
    rowGap: hp(0.8),
    flex: 1,
  },
  productName: {
    color: Colors.neutral200,
    lineHeight: hp(2.5),
    fontFamily: FontFamily.Poppins.Regular,
  },
  customerInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(2),
  },
  customerName: {
    color: Colors.neutral200,
    lineHeight: hp(1.5),
    fontSize: FontSizes.size12,
    fontFamily: FontFamily.Poppins.SemiBold,
  },
  orderSize: {
    fontSize: FontSizes.size16,
    color: Colors.neutral400,
    fontFamily: FontFamily.Poppins.Regular,
  },
  shipOrder: {
    fontSize: FontSizes.size16,
    color: Colors.green400,
    fontFamily: FontFamily.Poppins.Medium,
  },
  quantity: {
    color: Colors.neutral200,
    fontFamily: FontFamily.Poppins.Medium,
  },
});
