import React, { FC } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { hp, wp } from "@utils/responsive";
import { AppImages } from "@assets";
import AvatarImage from "@components/ui/AvatarImage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontFamily, FontSizes, Colors } from "@theme";
import { useAppNavigation } from "@hooks";

interface IAppointmentItemProps {
  renderFooter?: () => JSX.Element;
  isCompleted?: boolean;
}

const AppointmentItem: FC<IAppointmentItemProps> = props => {
  const { navigation } = useAppNavigation();

  const handleOnPressOrder = () => {
    navigation.navigate("OrderDetail");
  };

  return (
    <TouchableOpacity onPress={handleOnPressOrder} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.leftContainer}>
          <AvatarImage size={wp(16)} image={AppImages.dummyProfileAvatar} />
          {props.isCompleted ? (
            <Text style={styles.completedText}>Completed</Text>
          ) : (
            <Image source={AppImages.calendar} style={styles.calendarIcon} />
          )}
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.businessNameTitle}>Business Name</Text>
          <Text style={styles.businessNameValue}>La Prairie</Text>
          <View style={styles.iconTitleRow}>
            <MaterialCommunityIcons
              name="clock"
              size={wp(5)}
              color={Colors.neutral400}
            />
            <Text style={styles.iconTitleText}>9:30 PM - 10:30 PM (1h)</Text>
          </View>
          <View style={styles.iconTitleRow}>
            <Image
              source={AppImages.homeProCart}
              tintColor={Colors.neutral400}
              style={styles.producticon}
            />
            <Text style={styles.iconTitleText}> 1 product</Text>
          </View>
        </View>
      </View>
      {props.renderFooter?.()}
    </TouchableOpacity>
  );
};

export default AppointmentItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutral700,
    borderRadius: wp(5),
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  calendarIcon: {
    height: wp(5),
    width: wp(5),
    marginTop: hp(1),
  },
  leftContainer: {
    alignItems: "center",
  },
  rightContainer: {
    marginHorizontal: wp(4),
    flex: 1,
    rowGap: hp(1),
  },
  businessNameTitle: {
    lineHeight: hp(1.5),
    color: Colors.neutral400,
    fontSize: FontSizes.size14,
    fontFamily: FontFamily.Poppins.Regular,
  },
  businessNameValue: {
    color: Colors.white,
    lineHeight: hp(2.5),
    fontSize: FontSizes.size18,
    fontFamily: FontFamily.Poppins.Medium,
  },
  iconTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(2),
  },
  iconTitleText: {
    lineHeight: hp(1.5),
    color: Colors.neutral200,
    fontSize: FontSizes.size13,
    fontFamily: FontFamily.Poppins.Regular,
    top: 1,
  },
  producticon: {
    height: wp(4),
    width: wp(4),
    marginLeft: wp(0.4),
  },
  completedText: {
    fontFamily: FontFamily.Poppins.SemiBold,
    color: Colors.green400,
    fontSize: FontSizes.size12,
    marginTop: hp(1),
  },
});
