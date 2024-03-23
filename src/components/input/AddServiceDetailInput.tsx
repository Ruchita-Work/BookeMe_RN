import React, { FC } from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { hp, wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";

interface IAddServiceDetailInputProps extends TextInputProps {
  containerStyle?: ViewStyle;
  useSheetInput?: boolean;
}

const AddServiceDetailInput: FC<IAddServiceDetailInputProps> = ({
  containerStyle,
  useSheetInput = true,
  ...inputProps
}) => {
  let InputComponent: any = BottomSheetTextInput;

  if (!useSheetInput) {
    InputComponent = TextInput;
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <InputComponent
        placeholderTextColor={Colors.white}
        {...inputProps}
        style={[styles.input, inputProps.style]}
      />
    </View>
  );
};

export default AddServiceDetailInput;

const styles = StyleSheet.create({
  container: {
    borderRadius: wp(10),
    borderWidth: 1,
    borderColor: Colors.primaryBlue,
  },
  input: {
    fontFamily: FontFamily.Urbanist.Medium,
    fontSize: FontSizes.size18,
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
    color: Colors.white,
  },
});
