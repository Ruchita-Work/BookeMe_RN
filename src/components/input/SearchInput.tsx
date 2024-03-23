import React, { forwardRef } from "react";
import {
  Image,
  ImageStyle,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { hp, wp } from "@utils/responsive";
import { AppImages } from "@assets";
import { Colors, FontFamily } from "@theme";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";

interface ISearchInputProps extends TextInputProps {
  containerStyle?: ViewStyle;
  rightContent?: () => JSX.Element;
  customSearchIcon?: () => JSX.Element;
  useBottomSheetInput?: boolean;
  searchIconStyle?: ImageStyle;
}

const SearchInput = forwardRef<TextInput, ISearchInputProps>((props, ref) => {
  const {
    customSearchIcon,
    containerStyle,
    useBottomSheetInput,
    rightContent,
    searchIconStyle,
    ...inputProps
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      {customSearchIcon ? (
        customSearchIcon()
      ) : (
        <Image
          source={AppImages.search}
          style={[styles.searchIcon, searchIconStyle]}
        />
      )}
      {useBottomSheetInput ? (
        <BottomSheetTextInput
          ref={ref}
          placeholderTextColor={Colors.white}
          {...inputProps}
          style={[styles.input, inputProps.style]}
        />
      ) : (
        <TextInput
          ref={ref}
          placeholderTextColor={Colors.white}
          {...inputProps}
          style={[styles.input, inputProps.style]}
        />
      )}
      {rightContent && rightContent()}
    </View>
  );
});

export default SearchInput;

const styles = StyleSheet.create({
  searchIcon: {
    height: wp(5),
    width: wp(5),
  },
  container: {
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    borderWidth: 1,
    borderColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: wp(4.5),
  },
  input: {
    marginHorizontal: wp(3),
    paddingVertical: 1,
    flex: 1,
    color: Colors.white,
    fontFamily: FontFamily.Poppins.Regular,
  },
});
