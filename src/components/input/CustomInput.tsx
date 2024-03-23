import React, { FC, memo } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { FontFamily, FontSizes, Colors } from "@theme";
import { hp } from "@utils/responsive";

export interface ICustomInputProps extends TextInputProps {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  error?: string;
  labelStyle?: StyleProp<TextStyle>;
  renderLeftContent?: () => JSX.Element;
  inputContainerStyle?: StyleProp<ViewStyle>;
  renderRightContent?: () => JSX.Element;
  renderAsTouchable?: boolean;
  onPress?: () => void;
}

const CustomInput: FC<ICustomInputProps> = ({
  label,
  containerStyle,
  error,
  labelStyle,
  renderLeftContent,
  inputContainerStyle,
  renderRightContent,
  renderAsTouchable = false,
  onPress,
  ...inputProps
}) => {
  return (
    <View style={containerStyle}>
      {!!renderAsTouchable && (
        <TouchableOpacity
          onPress={onPress}
          style={[StyleSheet.absoluteFill, { zIndex: 99999 }]}
        />
      )}
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <View style={[styles.inputContainer, inputContainerStyle]}>
        {renderLeftContent?.()}
        <TextInput
          placeholderTextColor={Colors.white + 80}
          placeholder="Enter details"
          {...inputProps}
          style={[styles.input, inputProps.style]}
          editable={
            renderAsTouchable
              ? false
              : inputProps.editable !== undefined
              ? inputProps.editable
              : true
          }
        />
        {renderRightContent?.()}
      </View>
      <Text numberOfLines={1} style={styles.error}>
        {error || " "}
      </Text>
    </View>
  );
};

export default memo(CustomInput);

const styles = StyleSheet.create({
  label: {
    color: Colors.neutral400,
    fontFamily: FontFamily.Poppins.Regular,
    fontSize: FontSizes.size12,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#6C5346",
    borderBottomWidth: 1,
  },
  input: {
    paddingVertical: 0,
    paddingTop: hp(1),
    paddingBottom: hp(1.5),
    fontFamily: FontFamily.Poppins.Medium,
    fontSize: FontSizes.size16,
    color: Colors.neutral200,
    flex: 1,
  },
  error: {
    color: "#cc0000",
    marginTop: 4,
    fontSize: FontSizes.size14,
    fontFamily: FontFamily.Poppins.Medium,
  },
});
