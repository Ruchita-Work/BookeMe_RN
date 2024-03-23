import React, { FC } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { AppImages } from "@assets";
import { LinearGradient } from "expo-linear-gradient";
import { Colors, FontFamily, FontSizes } from "@theme";
import { hp, wp } from "@utils/responsive";
import { Octicons } from "@expo/vector-icons";

const OrderDetailProduct: FC = () => {
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
        <Text style={styles.productName} numberOfLines={2}>
          La Prairie{" "}
        </Text>
      </ImageBackground>
      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={2}>
          Intensive Theraphy Choco Gotas Shine
        </Text>
        <View style={styles.ratingContainer}>
          <Octicons color={Colors.orange500} size={wp(4)} name="star-fill" />
          <Text style={styles.ratingAverage}>4.9</Text>
          <Text style={styles.totalReviewCount}>(135)</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.price}>$35.00</Text>
          <Text style={styles.discount}>$40.20</Text>
        </View>
        <Text style={styles.quantity}>Quantity: 1</Text>
      </View>
    </View>
  );
};

export default OrderDetailProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutral800,
    borderRadius: wp(5),
    flexDirection: "row",
    alignItems: "center",
  },
  orderImage: {
    height: hp(18.5),
    width: wp(29),
    borderRadius: wp(5),
    overflow: "hidden",
  },
  orderImageGradient: {
    height: "50%",
    marginTop: "auto",
  },
  body: {
    marginHorizontal: wp(3),
    rowGap: hp(1),
    flex: 1,
  },
  productName: {
    position: "absolute",
    bottom: hp(0.8),
    left: wp(2.2),
    fontSize: FontSizes.size16,
    color: "white",
    fontFamily: FontFamily.Poppins.Medium,
    paddingRight: wp(6),
  },
  title: {
    color: Colors.neutral200,
    fontFamily: FontFamily.Poppins.Regular,
    width: "60%",
    lineHeight: hp(2.7),
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(1),
  },
  ratingAverage: {
    color: Colors.neutral200,
    fontFamily: FontFamily.Poppins.SemiBold,
    fontSize: FontSizes.size13,
  },
  totalReviewCount: {
    color: Colors.neutral400,
    fontFamily: FontFamily.Poppins.Regular,
    fontSize: FontSizes.size13,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(1),
  },
  price: {
    color: Colors.neutral200,
    fontSize: FontSizes.size16,
    fontFamily: FontFamily.Poppins.Medium,
  },
  discount: {
    color: Colors.neutral400,
    fontSize: FontSizes.size13,
    fontFamily: FontFamily.Poppins.Regular,
    textDecorationLine: "line-through",
  },
  quantity: {
    color: Colors.neutral200,
    fontFamily: FontFamily.Poppins.Medium,
  },
});
