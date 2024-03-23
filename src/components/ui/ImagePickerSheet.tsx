import React, { forwardRef, useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { useHideTabsForSheet } from "@hooks";
import { hp, wp } from "@utils/responsive";
import AppSheet from "./AppSheet";
import { Colors, FontFamily, FontSizes } from "@theme";
import { AntDesign } from "@expo/vector-icons";
import ButtonComponent from "@components/button/Button";
import { ImagePickerAsset, ImagePickerOptions } from "expo-image-picker";
import { launchCamera, launchImagePicker } from "@utils/mediaPicker";

interface ImagePickerSheetProps {
  handleHomeTabsVisibility?: boolean;
  title?: string;
  onSelectMedia: (media: ImagePickerAsset[]) => void;
  cameraOptions?: ImagePickerOptions;
  galleryOptions?: ImagePickerOptions;
}

const ImagePickerSheet = forwardRef<BottomSheet, ImagePickerSheetProps>(
  (props, ref) => {
    const {
      handleHomeTabsVisibility = false,
      title,
      onSelectMedia,
      cameraOptions = {},
      galleryOptions = {},
    } = props;

    const { onAnimateSheet } = useHideTabsForSheet();
    const snapPoints = useMemo(() => [hp(40)], []);

    const handleSheetClose = () => {
      ref.current?.close();
    };

    const onPressCamera = async () => {
      try {
        const response = await launchCamera(cameraOptions);
        if (response) {
          onSelectMedia?.(response);
        }
        handleSheetClose();
      } catch (error) {}
    };

    const onPressGallery = async () => {
      try {
        const response = await launchImagePicker(galleryOptions);
        if (response) {
          onSelectMedia?.(response);
        }
        handleSheetClose();
      } catch (error) {}
    };

    return (
      <AppSheet
        handleStyle={styles.sheetHandle}
        onAnimate={handleHomeTabsVisibility ? onAnimateSheet : undefined}
        ref={ref}
        snapPoints={snapPoints}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{title || "Select Media"}</Text>
            <TouchableOpacity onPress={handleSheetClose} hitSlop={wp(2)}>
              <AntDesign name="close" size={wp(5)} color={Colors.neutral200} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonComponent
              buttonStyle={{ width: "100%" }}
              text="Camera"
              onPress={onPressCamera}
            />
            <ButtonComponent
              buttonStyle={{ width: "100%" }}
              text="Gallery"
              onPress={onPressGallery}
            />
            <ButtonComponent
              variant="ghost"
              buttonStyle={{ width: "100%" }}
              text="Cancel"
              onPress={handleSheetClose}
            />
          </View>
        </View>
      </AppSheet>
    );
  },
);

export default ImagePickerSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral800,
    paddingHorizontal: wp(5),
  },
  sheetHandle: {
    backgroundColor: Colors.neutral800,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: hp(1.5),
  },
  headerTitle: {
    color: Colors.neutral200,
    fontSize: FontSizes.size24,
    fontFamily: FontFamily.Poppins.Medium,
  },
  buttonsContainer: {
    rowGap: hp(2),
    marginTop: hp(1),
  },
});
