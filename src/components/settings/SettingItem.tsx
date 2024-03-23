import React, { FC, ReactNode } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { wp } from "@utils/responsive";
import { Entypo } from "@expo/vector-icons";
import { FontFamily, FontSizes, Colors } from "@theme";

type ISettingItemProps = {
  title: string;
  icon?: ImageSourcePropType;
  onPress: TouchableOpacityProps["onPress"];
  customIcon?: ReactNode;
  hideRightIcon?: boolean;
};

const SettingItem: FC<ISettingItemProps> = ({
  title,
  icon,
  onPress,
  customIcon,
  hideRightIcon = false,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.settingItem}>
      <View style={styles.settingItemIconContainer}>
        {customIcon || (
          <Image
            source={icon}
            style={styles.settingItemIcon}
            tintColor={Colors.neutral200}
          />
        )}
      </View>
      <Text style={styles.settingItemTitle}>{title}</Text>
      {!hideRightIcon && (
        <Entypo size={wp(4)} name="chevron-thin-right" color={Colors.white} />
      )}
    </TouchableOpacity>
  );
};

export default SettingItem;

const styles = StyleSheet.create({
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingItemIconContainer: {
    height: wp(10),
    width: wp(10),
    borderRadius: wp(6),
    backgroundColor: Colors.neutral600,
    justifyContent: "center",
    alignItems: "center",
  },
  settingItemIcon: {
    height: wp(5),
    width: wp(5),
    resizeMode: "contain",
  },
  settingItemTitle: {
    paddingHorizontal: wp(4),
    color: Colors.neutral200,
    fontSize: FontSizes.size16,
    fontFamily: FontFamily.Poppins.Medium,
    top: -2,
    flex: 1,
  },
});
