import React, { FC } from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { hp, wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";

interface IColumnBarProps {
  title: string;
  value: number;
  maxValue: number;
  subTitle?: string;
  titleStyle?: TextStyle;
  subTitleStyle?: TextStyle;
  barStyle?: ViewStyle;
}

const ColumnBar: FC<IColumnBarProps> = ({
  maxValue = 100,
  title = "",
  value = 0,
  barStyle,
  subTitle,
  subTitleStyle,
  titleStyle,
}) => {
  const completedPercentage = (value / maxValue) * 100;
  return (
    <View style={styles.container}>
      <View style={[styles.grayBackground, barStyle]}>
        <View
          style={[styles.highlightView, { height: `${completedPercentage}%` }]}
        />
      </View>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {!!subTitle && (
        <Text style={[styles.subTitle, subTitleStyle]}>{subTitle}</Text>
      )}
    </View>
  );
};

export default ColumnBar;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  grayBackground: {
    height: hp(17),
    backgroundColor: "#565656",
    width: wp(6),
    borderRadius: wp(2),
    overflow: "hidden",
  },
  highlightView: {
    backgroundColor: Colors.primary,
    right: 0,
    left: 0,
    bottom: 0,
    borderRadius: wp(2),
    position: "absolute",
  },
  title: {
    color: Colors.white,
    fontSize: FontSizes.size16,
    lineHeight: hp(2.7),
    marginTop: hp(0.5),
    fontFamily: FontFamily.Poppins.Bold,
  },
  subTitle: {
    color: Colors.white,
    fontFamily: FontFamily.Poppins.Regular,
  },
});
