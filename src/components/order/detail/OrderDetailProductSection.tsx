import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSizes, Colors } from "@theme";
import { hp, wp } from "@utils/responsive";
import OrderDetailProduct from "@components/order/detail/OrderDetailProduct";

interface IOrderDetailProductSectionProps {}

const OrderDetailProductSection: FC<IOrderDetailProductSectionProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <OrderDetailProduct />
    </View>
  );
};

export default OrderDetailProductSection;

const styles = StyleSheet.create({
  container: {
    marginTop: hp(3),
  },
  title: {
    color: Colors.neutral200,
    fontSize: FontSizes.size20,
    paddingHorizontal: wp(1),
    fontFamily: FontFamily.Poppins.Medium,
    marginBottom: hp(2),
  },
});
