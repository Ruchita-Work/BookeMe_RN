import React, { FC } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { SvgUri } from "react-native-svg";
import { AppImages, AppSvgs } from "@assets";
import { hp, wp } from "@utils/responsive";
import { Colors, FontFamily } from "@theme";

interface IExploreSearchInputProps extends TextInputProps {
  containerStyle?: ViewStyle;
  onPressFilter: () => void;
}

const ExploreSearchInput: FC<IExploreSearchInputProps> = ({
  containerStyle,
  onPressFilter,
  ...inputProps
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <SvgUri uri={AppSvgs.search} />
      <TextInput
        placeholderTextColor={Colors.white}
        placeholder="Search"
        {...inputProps}
        style={[styles.input, inputProps.style]}
      />
      <TouchableOpacity activeOpacity={0.5} onPress={onPressFilter}>
        <Image source={AppImages.filter} style={styles.filter} />
      </TouchableOpacity>
    </View>
  );
};

export default ExploreSearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.dark2,
    paddingHorizontal: wp(4),
    borderRadius: wp(3),
  },
  input: {
    flex: 1,
    paddingVertical: hp(2),
    color: Colors.white,
    paddingHorizontal: wp(3),
    fontFamily: FontFamily.Urbanist.SemiBold,
  },
  filter: {
    height: wp(6),
    width: wp(6),
  },
});
