import React, { FC, useState } from "react";
import {
  Image,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { hp, wp } from "@utils/responsive";
import { AppImages } from "@assets";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontFamily, Colors } from "@theme";

interface ICommentInput extends TextInputProps {
  containerStyle?: ViewStyle;
}

const CommentInput: FC<ICommentInput> = ({ containerStyle, ...inputProps }) => {
  const { bottom } = useSafeAreaInsets();

  const [isFocused, setIsFocused] = useState(false);

  const focusedContainerStyle: ViewStyle = isFocused
    ? styles.focusedContainer
    : {};
  const focusedInputContainerStyle: TextInputProps["style"] = isFocused
    ? styles.focusedInputContainer
    : {};
  const focusedIconColor = isFocused ? "#FF4D67" : "#9E9E9E";

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: bottom + hp(2) },
        focusedContainerStyle,
        containerStyle,
      ]}>
      <View style={[styles.inputContainer, focusedInputContainerStyle]}>
        <BottomSheetTextInput
          placeholder="Add comment..."
          placeholderTextColor={focusedIconColor}
          selectionColor={focusedIconColor}
          {...inputProps}
          style={[styles.input, { color: focusedIconColor }, inputProps.style]}
          onFocus={e => {
            inputProps.onFocus?.(e);
            setIsFocused(true);
          }}
          onBlur={e => {
            inputProps.onBlur?.(e);
            setIsFocused(false);
          }}
        />
        <View style={styles.inputRightIconsContainer}>
          <TouchableOpacity>
            <Feather name="at-sign" size={wp(5)} color={focusedIconColor} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="gift-outline"
              size={wp(5)}
              color={focusedIconColor}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={AppImages.smiley}
              style={[styles.inputRightIcon, { tintColor: focusedIconColor }]}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
        <Image
          style={styles.sendIcon}
          source={AppImages.commentSend}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default CommentInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(4),
  },
  focusedContainer: {
    borderWidth: 1,
    paddingBottom: hp(2),
    borderColor: Colors.dark3,
    borderTopRightRadius: wp(4),
    borderTopLeftRadius: wp(4),
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.dark1,
    paddingHorizontal: wp(4),
    borderRadius: wp(3),
  },
  focusedInputContainer: {
    backgroundColor: "#FF4D6710",
    borderWidth: 1,
    borderColor: "#FF4D67",
  },
  input: {
    flex: 1,
    paddingVertical: hp(1.5),
    paddingRight: wp(2),
    color: Colors.white,
    fontFamily: FontFamily.Urbanist.Regular,
  },
  inputRightIcon: {
    height: wp(5),
    width: wp(5),
  },
  sendIcon: {
    height: wp(12),
    width: wp(12),
  },
  inputRightIconsContainer: {
    columnGap: wp(2.5),
    flexDirection: "row",
    alignItems: "center",
  },
});
