import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors, FontFamily, FontSizes } from "@theme";
import { hp, wp } from "@utils/responsive";
import ServiceDetailItem from "@components/service/ServiceDetailItem";

const OrderDetailServiceSection: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Services</Text>
      <ServiceDetailItem />
      <Text style={[styles.sectionHeader, { marginTop: hp(2.5) }]}>
        Booking Schedule
      </Text>
      <Text style={styles.serviceByName}>From 14:30 PM Mon, 16 Sep 2021</Text>
    </View>
  );
};

export default OrderDetailServiceSection;

const styles = StyleSheet.create({
  rowCenterSpaceBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    marginTop: hp(2),
    paddingHorizontal: wp(1),
  },
  sectionHeader: {
    fontSize: FontSizes.size20,
    color: Colors.neutral200,
    fontFamily: FontFamily.Poppins.Medium,
  },
  serviceInfoContainer: {
    marginTop: hp(3),
  },
  serviceTitle: {
    maxWidth: "40%",
  },
  serviceAmount: {
    fontFamily: FontFamily.Poppins.Medium,
    color: Colors.neutral200,
    fontSize: FontSizes.size16,
  },
  serviceByAvatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(2),
    marginTop: hp(1),
  },
  serviceBy: {
    color: Colors.neutral400,
    fontFamily: FontFamily.Poppins.Regular,
  },
  serviceTime: {
    color: Colors.neutral200,
    fontFamily: FontFamily.Poppins.Regular,
    fontSize: FontSizes.size13,
  },
  serviceByName: {
    color: Colors.neutral200,
    fontFamily: FontFamily.Poppins.Regular,
    marginTop: hp(1.5),
  },
});
