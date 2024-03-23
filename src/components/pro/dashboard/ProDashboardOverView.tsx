import React, { FC, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSizes, Colors } from "@theme";
import { hp, wp } from "@utils/responsive";
import Dropdown from "@components/ui/Dropdown";
import { AppImages } from "@assets";
import ProDashboardOverViewItem from "@components/pro/dashboard/ProDashboardOverViewItem";

const overViewData = [
  {
    title: "Total orders",
    icon: AppImages.totalOrders,
    count: "10.2k",
    percentage: "-2.35%",
  },
  {
    title: "Total sales",
    icon: AppImages.totalSales,
    count: "$420k",
    percentage: "+2.91%",
  },
  {
    title: "Products Sold",
    icon: AppImages.homeShop,
    count: "567",
  },
  {
    title: "Total engagement",
    icon: AppImages.totalEngagement,
    count: "21.5M",
    percentage: "+2.91%",
  },
];

const dropDownItemsData = ["Today", "This Month", "This Year"].map(item => ({
  label: item,
  value: item,
}));

const ProDashboardOverView: FC = () => {
  const [dropdownItems, setDropdownItems] = useState(dropDownItemsData);
  const [dropdownValue, setDropdownValue] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderTitle}>Overview</Text>
        <Dropdown
          items={dropdownItems}
          setItems={setDropdownItems}
          value={dropdownValue}
          setValue={setDropdownValue}
          modalTitle="Select Filter"
          placeholder="Select Filter"
        />
      </View>
      <FlatList
        data={overViewData}
        numColumns={2}
        renderItem={({ item }) => <ProDashboardOverViewItem data={item} />}
        columnWrapperStyle={styles.listColumnWrapper}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default ProDashboardOverView;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(5),
    marginTop: hp(2),
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionHeaderTitle: {
    color: Colors.white,
    fontSize: FontSizes.size24,
    lineHeight: hp(3),
    fontFamily: FontFamily.Urbanist.Medium,
  },
  listColumnWrapper: {
    justifyContent: "space-between",
    marginBottom: hp(2),
  },
  listContent: {
    marginTop: hp(2),
  },
});
