import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { hp, wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";

const chipTabs = ["HOME", "PRODUCTS", "SERVICES", "REVIEW"];

const ProHomeChipRow: FC = () => {
  return (
    <View style={styles.chiptabsContainer}>
      {chipTabs.map((item, index) => (
        <TouchableOpacity
          key={`chipTab-${index}`}
          style={[
            styles.chipTab,
            {
              backgroundColor: index === 0 ? Colors.primary : "#1C1C1CCC",
            },
          ]}>
          <Text style={styles.chipTabText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ProHomeChipRow;

const styles = StyleSheet.create({
  chipTab: {
    width: wp(22),
    height: hp(3.8),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp(10),
  },
  chipTabText: {
    color: Colors.white,
    fontSize: FontSizes.size13,
    fontFamily: FontFamily.Poppins.SemiBold,
  },
  chiptabsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: hp(3),
    paddingHorizontal: wp(1),
  },
});
