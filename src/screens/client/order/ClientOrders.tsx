import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppImages } from "@assets";
import { Colors, FontFamily, FontSizes } from "@theme";
import { hp, wp } from "@utils/responsive";
import { ClientOrderTabs } from "@components";

const ClientOrders = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Order List</Text>
        <Image source={AppImages.searchShine} style={styles.search} />
      </View>
      <View style={styles.tabsWrapper}>
        <ClientOrderTabs />
      </View>
    </SafeAreaView>
  );
};

export default ClientOrders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
    paddingTop: hp(Platform.select({ android: 2, ios: 1 })),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp(6),
    marginTop: hp(1),
  },
  headerTitle: {
    color: Colors.neutral200,
    fontSize: FontSizes.size20,
    lineHeight: hp(2.5),
    fontFamily: FontFamily.Poppins.Medium,
    top: 3,
  },
  search: {
    height: wp(6),
    width: wp(6),
  },
  tabsWrapper: {
    backgroundColor: Colors.neutral800,
    flexGrow: 1,
    marginTop: hp(6),
    borderTopLeftRadius: wp(6),
    borderTopRightRadius: wp(6),
    paddingTop: hp(2),
  },
});
