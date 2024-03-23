import React, { FC } from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import AvatarImage from "@components/ui/AvatarImage";
import { hp, wp } from "@utils/responsive";
import { AppImages } from "@assets";
import { Colors, FontFamily, FontSizes } from "@theme";

interface IServiceDetailItemProps {
  containerStyle?: StyleProp<ViewStyle>;
}

const ServiceDetailItem: FC<IServiceDetailItemProps> = ({ containerStyle }) => {
  return (
    <View style={[styles.serviceInfoContainer, containerStyle]}>
      <View
        style={[styles.rowCenterSpaceBetween, { alignItems: "flex-start" }]}>
        <Text style={[styles.serviceAmount, styles.serviceTitle]}>
          Haircut + Deluxe Beard/Facial
        </Text>
        <Text style={styles.serviceAmount}>$50.00</Text>
      </View>
      <View style={styles.rowCenterSpaceBetween}>
        <View style={styles.serviceByAvatarContainer}>
          <Text style={styles.serviceBy}>by</Text>
          <AvatarImage size={wp(6)} image={AppImages.dummyProfileAvatar} />
          <Text style={styles.serviceByName}>Lawrence Sullivan</Text>
        </View>
        <Text style={styles.serviceTime}>14:30 - 15:30(1h)</Text>
      </View>
    </View>
  );
};

export default ServiceDetailItem;

const styles = StyleSheet.create({
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
  },
  rowCenterSpaceBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
