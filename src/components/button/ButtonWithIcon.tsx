import React, { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Colors, FontSizes, FontFamily } from "@theme";
import { hp, wp } from "@utils/responsive";

type IButtonWithIcon = {
  text: string;
  icon?: any;
  style?: TouchableOpacityProps["style"];
  textStyle?: StyleProp<TextStyle>;
  onPress?: TouchableOpacityProps["onPress"];
};

const ButtonWithIcon: FC<IButtonWithIcon> = ({
  text,
  icon,
  style,
  textStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity style={[styles.fillButton, style]} onPress={onPress}>
      {icon}
      <Text style={[styles.fillText, textStyle]}>{text || ""}</Text>
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;

const styles = StyleSheet.create({
  fillText: {
    color: "black",
    textAlign: "center",
    fontSize: FontSizes.size20,
    fontFamily: FontFamily.Urbanist.Bold,
  },
  fillButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp(4),
    paddingVertical: hp(2.2),
    paddingHorizontal: wp(10),
    backgroundColor: Colors.white,
    borderRadius: wp(8),
  },
});
