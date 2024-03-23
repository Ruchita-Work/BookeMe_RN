import React, { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import Dropdown, { IDropdownProps } from "@components/ui/Dropdown";
import { FontFamily, FontSizes, Colors } from "@theme";
import { hp } from "@utils/responsive";

interface ICustomInputDropdownProps extends IDropdownProps {
  label: string;
  rootlabelStyle?: StyleProp<TextStyle>;
  rootStyle?: StyleProp<ViewStyle>;
  error?: string;
}

const CustomInputDropdown: FC<ICustomInputDropdownProps> = ({
  label,
  rootlabelStyle,
  rootStyle,
  error,
  ...dropdownProps
}) => {
  return (
    <View style={rootStyle}>
      {label && <Text style={[styles.label, rootlabelStyle]}>{label}</Text>}
      <Dropdown
        {...dropdownProps}
        style={[styles.dropdown, dropdownProps.style]}
        containerStyle={{
          ...styles.dropdownContainer,
          ...dropdownProps.containerStyle,
        }}
        labelStyle={[styles.dropdownLabel, dropdownProps.labelStyle]}
        placeholderStyle={[
          styles.dropdownPlaceholder,
          dropdownProps.placeholderStyle,
        ]}
      />
      <Text numberOfLines={1} style={styles.error}>
        {error || " "}
      </Text>
    </View>
  );
};

export default CustomInputDropdown;

const styles = StyleSheet.create({
  label: {
    color: Colors.deactivate,
    fontFamily: FontFamily.Inter.Bold,
    fontSize: FontSizes.size13,
    textTransform: "uppercase",
    marginBottom: hp(1),
  },
  dropdown: {
    backgroundColor: "transparent",
    paddingHorizontal: 0,
    borderRadius: 0,
    height: undefined,
    paddingBottom: hp(1.5),
    paddingTop: hp(0.8),
  },
  dropdownContainer: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: Colors.background2,
  },
  dropdownLabel: {
    fontFamily: FontFamily.Poppins.Medium,
  },
  dropdownPlaceholder: {
    fontFamily: FontFamily.Poppins.Medium,
    color: Colors.white + 90,
  },
  error: {
    color: "#cc0000",
    marginTop: 4,
    fontSize: FontSizes.size14,
    fontFamily: FontFamily.Poppins.Medium,
  },
});
