import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AppImages } from "@assets";
import { Entypo } from "@expo/vector-icons";
import { hp, normalize, wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";

const ExploreTopBookings: FC = () => {
  return (
    <View>
      <View style={styles.topBookingsHeader}>
        <Text style={styles.title}>Top Bookings</Text>
        <View style={styles.seeAllBookingsContainer}>
          <Text style={styles.allText}>All</Text>
          <Entypo name="chevron-right" size={wp(6)} color={Colors.white} />
        </View>
      </View>
      <View style={styles.topBookingsRow}>
        <Image
          source={AppImages.dummy_topBooking1}
          style={styles.topBookingsRowLeftImage}
        />
        <View style={{ justifyContent: "space-between" }}>
          <Image
            source={AppImages.dummy_topBooking2}
            style={styles.topBookingsRowRightImage1}
          />
          <Image
            source={AppImages.dummy_topBooking3}
            style={styles.topBookingsRowRightImage2}
          />
        </View>
      </View>
    </View>
  );
};

export default ExploreTopBookings;

const styles = StyleSheet.create({
  title: {
    fontSize: FontSizes.size33,
    lineHeight: FontSizes.size42,
    color: Colors.white,
    marginHorizontal: wp(4),
    marginVertical: hp(2),
    fontFamily: FontFamily.Rubik.Medium,
  },
  topBookingsRow: {
    marginHorizontal: wp(4),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topBookingsRowLeftImage: {
    width: wp(45),
    height: hp(32),
    borderTopRightRadius: wp(4),
    borderBottomLeftRadius: wp(4),
  },
  topBookingsRowRightImage1: {
    height: hp(8),
    width: wp(45),
    borderRadius: wp(5),
  },
  topBookingsRowRightImage2: {
    height: hp(23),
    width: wp(45),
    borderTopRightRadius: wp(5),
    borderBottomLeftRadius: wp(5),
  },
  allText: {
    fontSize: FontSizes.size22,
    lineHeight: normalize(22),
    color: Colors.white,
    fontFamily: FontFamily.Rubik.Medium,
    top: 2,
  },
  topBookingsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: wp(4),
  },
  seeAllBookingsContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(2),
  },
});
