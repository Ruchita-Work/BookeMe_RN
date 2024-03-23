import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import { wp } from "@utils/responsive";
import { Colors } from "@theme";

interface IRadioButtonProps {
  value: boolean;
  onChangeValue: (newValue: boolean) => void;
  tintColor?: string;
  size?: number;
}

const RadioButton: FC<IRadioButtonProps> = ({
  size = wp(6),
  value = true,
  tintColor = Colors.primary,
  onChangeValue,
}) => {
  const outerViewStyle: ViewStyle = {
    height: size,
    width: size,
    borderRadius: size / 2,
    justifyContent: "center",
    alignItems: "center",
  };

  const innerViewStyle: ViewStyle = {
    height: size - size * 0.45,
    width: size - size * 0.45,
    borderRadius: (size - size * 0.45) / 2,
  };

  if (value) {
    innerViewStyle.backgroundColor = tintColor;
    outerViewStyle.borderWidth = wp(0.5);
    outerViewStyle.borderColor = tintColor;
  } else {
    outerViewStyle.borderWidth = wp(0.5);
    outerViewStyle.borderColor = "#7D8699";
    innerViewStyle.backgroundColor = "transparent";
  }

  return (
    <TouchableOpacity
      style={outerViewStyle}
      onPress={() => onChangeValue(!value)}>
      <View style={innerViewStyle} />
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({});
