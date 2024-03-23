import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontFamily, FontSizes, Colors } from "@theme";
import { hp, wp } from "@utils/responsive";

const OrderDetailSummary: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Summary</Text>
      <View style={styles.summaryItem}>
        <Text style={styles.summaryItemTitle}>Services</Text>
        <Text style={styles.summaryValue}>$50.00</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text style={styles.summaryItemTitle}>Shopping</Text>
        <Text style={styles.summaryValue}>$35.00</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text style={styles.summaryItemTitle}>Shop Cut</Text>
        <Text style={styles.summaryValue}>$-10.00</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text style={styles.summaryItemTitle}>Tips</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={[styles.summaryValue, styles.addTip]}>Add Tip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.summaryItem}>
        <Text style={[styles.summaryItemTitle, styles.total]}>Total</Text>
        <Text style={[styles.summaryValue, styles.totalValue]}>$75.00</Text>
      </View>
    </View>
  );
};

export default OrderDetailSummary;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(1),
    rowGap: hp(2),
  },
  sectionHeader: {
    fontSize: FontSizes.size20,
    fontFamily: FontFamily.Poppins.Medium,
    color: Colors.neutral200,
    marginTop: hp(3),
  },
  summaryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  summaryItemTitle: {
    color: Colors.neutral200,
    fontFamily: FontFamily.Poppins.Regular,
    fontSize: FontSizes.size14,
  },
  summaryValue: {
    color: Colors.neutral200,
    fontFamily: FontFamily.Poppins.Medium,
    fontSize: FontSizes.size14,
  },
  addTip: {
    color: Colors.primary,
  },
  total: {
    fontSize: FontSizes.size16,
  },
  totalValue: {
    fontSize: FontSizes.size20,
  },
});
