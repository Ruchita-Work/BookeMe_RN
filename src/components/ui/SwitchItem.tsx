import React, { FC } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { hp, wp } from "@utils/responsive";
import ToggleSwitch from "toggle-switch-react-native";
import { FontFamily, FontSizes, Colors } from "@theme";

interface ISwitchItemProps {
  title: string;
  image: ImageSourcePropType;
  onSwitch: (isOn: boolean) => void;
  switchValue: boolean;
}

const SwitchItem: FC<ISwitchItemProps> = ({
  title,
  image,
  onSwitch,
  switchValue,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.leadingImage} source={image} />
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
      <ToggleSwitch
        onToggle={onSwitch}
        isOn={switchValue}
        offColor={Colors.dark3}
        onColor={Colors.primary}
      />
    </View>
  );
};

export default SwitchItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(4),
    paddingVertical: hp(1.8),
    borderBottomColor: Colors.background2,
    borderBottomWidth: 1,
  },
  leadingImage: {
    height: wp(6),
    width: wp(6),
    resizeMode: "contain",
  },
  title: {
    color: Colors.white,
    fontFamily: FontFamily.Inter.SemiBold,
    fontSize: FontSizes.size16,
    flex: 1,
  },
});
