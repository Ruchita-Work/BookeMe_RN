import React, { FC } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { hp, wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";

interface ISegmentedButtonsProps {
  buttons: string[];
  onPressButton: (buttonTitle: string) => void;
  activeButtonTitle: string;
  containerStyle?: ViewStyle;
}

const SegmentedButtons: FC<ISegmentedButtonsProps> = ({
  buttons = [],
  onPressButton,
  activeButtonTitle,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {buttons.map((item, index) => {
        const isActive = item === activeButtonTitle;
        return (
          <TouchableOpacity
            onPress={() => onPressButton(item)}
            style={[styles.inactiveButton, isActive && styles.activeButton]}
            key={`SegmentedButtons-${item}-${index}`}>
            <Text
              style={[
                styles.inactiveButtonTitle,
                isActive && styles.activeButtonTitle,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SegmentedButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: wp(1.5),
    borderWidth: 1,
    borderColor: "#1C1C1E",
    alignSelf: "flex-start",
  },
  inactiveButton: {
    backgroundColor: "transparent",
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    borderRadius: wp(1.5),
  },
  inactiveButtonTitle: {
    color: "#666666",
    fontFamily: FontFamily.Inter.Regular,
    fontSize: FontSizes.size16,
  },
  activeButton: {
    backgroundColor: "#1C1C1E",
  },
  activeButtonTitle: {
    color: Colors.white,
  },
});
