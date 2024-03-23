import React, { FC } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppImages } from "@assets";
import { Colors, FontFamily, FontSizes } from "@theme";
import { hp, wp } from "@utils/responsive";
import { Octicons } from "@expo/vector-icons";
import Counter from "@components/ui/Counter";

const BookServiceShoppingItem: FC = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.orderImage} source={AppImages.dummyProductImage} />
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
        <Counter containerStyle={{ paddingBottom: hp(1) }} />
      </View>
      <TouchableOpacity style={styles.bagCheckedContainer}>
        <Image source={AppImages.bagchecked} style={styles.bagchecked} />
      </TouchableOpacity>
    </View>
  );
};

export default BookServiceShoppingItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutral700,
    borderRadius: wp(5),
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  orderImage: {
    height: hp(18),
    width: wp(28),
    borderRadius: wp(5),
    overflow: "hidden",
  },
  body: {
    marginHorizontal: wp(3),
    rowGap: hp(1),
    flex: 1,
  },
  title: {
    color: Colors.neutral200,
    fontFamily: FontFamily.Poppins.Regular,
    lineHeight: hp(2.7),
    paddingTop: hp(1),
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
  bagCheckedContainer: {
    backgroundColor: Colors.green400,
    height: wp(12),
    width: wp(12),
    position: "absolute",
    right: 0,
    bottom: 0,
    borderTopLeftRadius: wp(6),
    justifyContent: "center",
    alignItems: "center",
  },
  bagchecked: {
    height: wp(5.5),
    width: wp(5.5),
    resizeMode: "contain",
  },
});
