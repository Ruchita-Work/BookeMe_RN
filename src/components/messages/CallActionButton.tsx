import React, { FC, PropsWithChildren } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Colors, FontFamily, FontSizes } from "@theme";
import { hp, wp } from "@utils/responsive";

interface CallActionButtonProps extends PropsWithChildren {
  onPress?: () => void;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
}

const CallActionButton: FC<CallActionButtonProps> = props => {
  const {
    onPress = () => {},
    title,
    titleStyle,
    containerStyle,
    buttonStyle,
    children,
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={[styles.actionButton, buttonStyle]}
        onPress={() => onPress()}>
        {children}
      </TouchableOpacity>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </View>
  );
};

export default CallActionButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    rowGap: hp(1.5),
  },
  actionButton: {
    height: wp(14),
    width: wp(14),
    borderRadius: wp(8),
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: FontSizes.size16,
    fontFamily: FontFamily.Poppins.Medium,
    color: Colors.neutral200,
  },
});
