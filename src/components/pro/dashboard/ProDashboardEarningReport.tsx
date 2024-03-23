import React, { FC, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColumnBar from "@components/ui/ColumnBar";
import Dropdown from "@components/ui/Dropdown";
import { FontFamily, FontSizes, Colors } from "@theme";
import { hp, wp } from "@utils/responsive";

const data = [
  { title: "Sun", subTitle: "$700", value: 700 },
  { title: "Mon", subTitle: "$650", value: 650 },
  { title: "Tue", subTitle: "$400", value: 400 },
  { title: "Wed", subTitle: "$500", value: 500 },
  { title: "Thu", subTitle: "$800", value: 800 },
  { title: "Fri", subTitle: "$850", value: 850 },
  { title: "Sat", subTitle: "$100", value: 100 },
];

const dropDownItemsData = ["Today", "This Month", "This Year"].map(item => ({
  label: item,
  value: item,
}));

const ProDashboardEarningReport: FC = () => {
  const [dropdownItems, setDropdownItems] = useState(dropDownItemsData);
  const [dropdownValue, setDropdownValue] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Earning Report</Text>
        <Dropdown
          items={dropdownItems}
          setItems={setDropdownItems}
          value={dropdownValue}
          setValue={setDropdownValue}
          modalTitle="Select Filter"
          placeholder="Select Filter"
        />
      </View>
      <View style={styles.chartContainer}>
        {data.map((item, index) => (
          <ColumnBar
            key={`ColumnBar-${index}`}
            title={item.title}
            subTitle={item.subTitle}
            value={item.value}
            maxValue={1000}
            barStyle={styles.bar}
            subTitleStyle={styles.chartSubTitle}
            titleStyle={styles.chartTitle}
          />
        ))}
      </View>
    </View>
  );
};

export default ProDashboardEarningReport;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(5),
    marginTop: hp(1),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: FontSizes.size22,
    lineHeight: hp(3),
    color: Colors.white,
    fontFamily: FontFamily.Urbanist.Medium,
  },
  bar: {
    width: wp(7.25),
    height: hp(21),
  },
  chartContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: hp(1.5),
    justifyContent: "space-between",
  },
  chartTitle: {
    fontSize: FontSizes.size12,
  },
  chartSubTitle: {
    fontSize: FontSizes.size12,
    lineHeight: hp(1.5),
  },
});
