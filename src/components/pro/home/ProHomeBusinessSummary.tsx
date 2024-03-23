import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ColumnBar from "@components/ui/ColumnBar";
import { hp, wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";
import { useAppNavigation } from "@hooks";

const ProHomeBusinessSummary: FC = () => {
  const { navigation } = useAppNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Business Summary</Text>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.navigate("ProDashboard")}
        style={styles.summaryCard}>
        <View style={styles.earningsContainer}>
          <Text style={styles.weekEarnings}>This Week’s Earnings</Text>
          <Text style={styles.earningsAmount}>$2,368</Text>
          <Text style={styles.todayEarningAmount}>
            $625 <Text style={styles.todayText}>today</Text>
          </Text>
          <Text style={styles.bookedText}>80% booked</Text>
        </View>
        <View style={styles.columnBarChartContainer}>
          <ColumnBar title="M" value={60} maxValue={100} />
          <ColumnBar title="T" value={50} maxValue={100} />
          <ColumnBar title="W" value={75} maxValue={100} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProHomeBusinessSummary;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(5),
    marginTop: hp(4),
  },
  sectionTitle: {
    color: Colors.white,
    fontSize: FontSizes.size20,
    lineHeight: hp(2.5),
    marginBottom: hp(2.5),
    fontFamily: FontFamily.Poppins.Medium,
  },
  summaryCard: {
    backgroundColor: Colors.neutral800,
    borderRadius: wp(6),
    paddingHorizontal: wp(4),
    paddingTop: hp(1.5),
    paddingBottom: hp(2),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weekEarnings: {
    color: Colors.neutral200,
    fontSize: FontSizes.size16,
    lineHeight: hp(2.5),
    fontFamily: FontFamily.Poppins.Bold,
  },
  earningsAmount: {
    marginTop: hp(2.5),
    color: Colors.white,
    fontSize: FontSizes.size36,
    lineHeight: hp(5.5),
    fontFamily: FontFamily.Poppins.Medium,
  },
  todayEarningAmount: {
    lineHeight: hp(3),
    color: Colors.primary,
    fontSize: FontSizes.size24,
    marginVertical: hp(1.5),
    fontFamily: FontFamily.Poppins.Medium,
  },
  bookedText: {
    color: Colors.primaryBlue,
    fontSize: FontSizes.size16,
    lineHeight: hp(2),
    marginTop: hp(0.5),
    fontFamily: FontFamily.Poppins.Medium,
  },
  columnBarChartContainer: {
    flexDirection: "row",
    columnGap: wp(2),
  },
  todayText: {
    color: Colors.neutral200,
  },
  earningsContainer: {
    flex: 1,
    paddingRight: wp(2),
    marginRight: wp(2),
  },
});
