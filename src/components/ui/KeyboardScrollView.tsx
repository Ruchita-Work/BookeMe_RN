import React, { FC } from "react";
import { ScrollViewProps, StyleSheet } from "react-native";
import { hp } from "@utils/responsive";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

type KeyboardAwareScrollViewProps = {
  bottomOffset?: number;
} & ScrollViewProps;

const KeyboardScrollView: FC<KeyboardAwareScrollViewProps> = props => {
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      bounces={false}
      showsVerticalScrollIndicator={false}
      bottomOffset={hp(4)}
      {...props}
      contentContainerStyle={[
        styles.scrollContent,
        props.contentContainerStyle,
      ]}
      style={[styles.scroll, props.style]}>
      {props.children}
    </KeyboardAwareScrollView>
  );
};

export default KeyboardScrollView;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingBottom: hp(6),
  },
  scroll: { width: "100%" },
});
