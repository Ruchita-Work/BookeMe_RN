import React, { FC } from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "@theme";
import { wp } from "@utils/responsive";

interface ICheckboxProps {
  checked: boolean;
  size?: number;
  tintColor?: string;
  checkIconSize?: number;
  onPress?: (newValue: boolean) => void;
}

const Checkbox: FC<ICheckboxProps> = ({
  checked,
  size = wp(6),
  tintColor = Colors.primary,
  checkIconSize = size * 0.66,
  onPress,
}) => {
  let containerViewStyle: ViewStyle = {
    height: size,
    width: size,
    borderRadius: size / 2,
    justifyContent: "center",
    alignItems: "center",
  };

  if (checked) {
    containerViewStyle.borderWidth = 0;
    containerViewStyle.backgroundColor = tintColor;
  } else {
    containerViewStyle.borderWidth = 1;
    containerViewStyle.borderColor = "#87888F";
  }

  return (
    <TouchableOpacity
      style={containerViewStyle}
      onPress={() => onPress?.(!checked)}>
      {!!checked && (
        <Feather size={checkIconSize} name="check" color={"#000"} />
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;
