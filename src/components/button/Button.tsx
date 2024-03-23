import React, { FC } from "react";
import {
  StyleSheet,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import { Colors, FontSizes, FontFamily } from "@theme";
import { hp, wp } from "@utils/responsive";

interface IButtonProps extends TouchableOpacityProps {
  text: string;
  variant?: "ghost" | "fill" | "bordered";
  textStyle?: TextProps["style"];
  buttonStyle?: ViewProps["style"];
  containerStyle?: ViewProps["style"];
}

const ButtonComponent: FC<IButtonProps> = props => {
  const {
    text = "",
    variant = "fill",
    textStyle,
    buttonStyle,
    containerStyle,
    ...touchableProps
  } = props;

  const buttonStyleMap: Record<typeof variant, ViewStyle> = {
    ghost: styles.ghostButton,
    bordered: styles.borderedButton,
    fill: styles.fillButton,
  };

  const disabledButtonStyleMap: Record<typeof variant, ViewStyle | undefined> =
    {
      fill: styles.fillButtonDisabled,
      bordered: styles.ghostButtonDisabled,
      ghost: styles.ghostButtonDisabled,
    };

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        {...touchableProps}
        style={[
          buttonStyleMap[variant],
          buttonStyle,
          touchableProps.disabled && disabledButtonStyleMap[variant],
        ]}>
        <Text style={[styles.buttonTitle, textStyle]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  ghostButton: {
    paddingVertical: hp(1.8),
    paddingHorizontal: wp(2.5),
    borderRadius: wp(8),
    borderWidth: 0,
  },
  borderedButton: {
    marginTop: hp(1),
    paddingVertical: hp(1.8),
    paddingHorizontal: wp(7.5),
    color: Colors.white,
    borderRadius: wp(8),
    borderWidth: 1,
    borderColor: Colors.white,
  },
  buttonTitle: {
    color: Colors.white,
    textAlign: "center",
    fontSize: FontSizes.size18,
    fontFamily: FontFamily.Poppins.Medium,
  },
  fillButton: {
    marginTop: hp(1),
    paddingVertical: hp(1.8),
    paddingHorizontal: wp(10),
    backgroundColor: Colors.primary,
    borderRadius: wp(8),
  },
  fillButtonDisabled: {
    backgroundColor: Colors.gray800,
  },
  ghostButtonDisabled: {
    opacity: 0.6,
  },
});
