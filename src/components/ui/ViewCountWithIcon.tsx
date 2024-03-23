import React, { FC } from "react";
import { Image, StyleSheet, Text, View, ViewStyle } from "react-native";
import { AppImages } from "@assets";
import { hp, wp } from "@utils/responsive";
import { Colors, FontSizes, FontFamily } from "@theme";

interface IViewCountWithIconProps {
  viewCount: string;
  tintColor?: string;
  containerStyle?: ViewStyle;
}

const ViewCountWithIcon: FC<IViewCountWithIconProps> = ({
  viewCount,
  tintColor,
  containerStyle,
}) => {
  return (
    <View style={[styles.viewCountContainer, containerStyle]}>
      <Image
        tintColor={tintColor}
        source={AppImages.playRound}
        style={styles.viewCountIcon}
      />
      <Text style={styles.viewCount}>{viewCount}</Text>
    </View>
  );
};

export default ViewCountWithIcon;

const styles = StyleSheet.create({
  viewCountContainer: {
    marginTop: "auto",
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(2),
  },
  viewCount: {
    color: Colors.white,
    fontSize: FontSizes.size12,
    fontFamily: FontFamily.Urbanist.SemiBold,
  },
  viewCountIcon: {
    height: wp(4),
    width: wp(4),
  },
});
