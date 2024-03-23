import React, { FC } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { hp } from "@utils/responsive";

interface ISeparatorProps {
  color?: string;
  style?: ViewStyle;
}

const Separator: FC<ISeparatorProps> = ({ color = "", style }) => {
  return (
    <View
      style={[styles.separator, !!color && { borderBottomColor: color }, style]}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#979797", // Change the color as needed
    marginVertical: hp(1.2), // Adjust the margin as needed
  },
});

export default Separator;
