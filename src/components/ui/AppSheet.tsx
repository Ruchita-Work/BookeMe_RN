import React, { forwardRef, memo } from "react";
import { StyleSheet } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetProps,
} from "@gorhom/bottom-sheet";
import { hp, wp } from "@utils/responsive";
import { Colors } from "@theme";

interface IAppSheetProps extends BottomSheetProps {}

const AppSheet = forwardRef<BottomSheet, IAppSheetProps>((props, ref) => {
  return (
    <BottomSheet
      enablePanDownToClose
      onClose={props.onClose}
      keyboardBlurBehavior="restore"
      backdropComponent={backdropProps => (
        <BottomSheetBackdrop
          {...backdropProps}
          opacity={0.6}
          onPress={props.onClose}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
        />
      )}
      ref={ref}
      index={-1}
      handleStyle={styles.sheetHandle}
      handleIndicatorStyle={styles.handleIndicator}
      style={styles.sheet}
      snapPoints={[hp(64)]}
      {...props}>
      {props.children}
    </BottomSheet>
  );
});

export default memo(AppSheet);

const styles = StyleSheet.create({
  sheetHandle: {
    backgroundColor: Colors.dark2,
  },
  handleIndicator: {
    width: wp(12),
    backgroundColor: Colors.neutral600,
  },
  sheet: {
    overflow: "hidden",
    borderTopLeftRadius: wp(6),
    borderTopRightRadius: wp(6),
  },
});
