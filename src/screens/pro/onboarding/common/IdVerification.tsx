import React, { useRef } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppImages } from "@assets";
import {
  BackBox,
  ButtonComponent,
  CustomBackgroundImage,
  ImagePickerSheet,
} from "@components";
import { hp, wp } from "@utils/responsive";
import { FontSizes, Colors, FontFamily } from "@theme";
import { useAppDispatch, useAppNavigation, useAppSelector } from "@hooks";
import { onboardingActions } from "@redux/features";
import { ImagePickerAsset } from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";

const IdVerification = () => {
  const selectedIdDoc = useAppSelector(
    state =>
      state.onboarding.proOnboarding[state.onboarding.proOnboarding.proType]
        .idDocument,
  );

  const dispatch = useAppDispatch();
  const { navigation } = useAppNavigation();
  const imagePickerSheetRef = useRef<BottomSheet>(null);

  const handleSelectImage = async (medias: ImagePickerAsset[]) => {
    dispatch(onboardingActions.updateIdDocument(medias[0]));
  };

  const handleOnOpenImagePicker = () => {
    imagePickerSheetRef?.current?.snapToIndex(0);
  };

  const handleOnPressNext = () => {
    navigation.navigate("UploadSelfie");
  };

  return (
    <CustomBackgroundImage imageSource={AppImages.onboardingBackground}>
      <SafeAreaView style={styles.container}>
        <BackBox />
        <View style={styles.content}>
          <Text style={styles.title}>Identity Verification</Text>
          <View style={styles.photoUploadRow}>
            <View
              style={[
                styles.uploadCheckItem,
                selectedIdDoc && { backgroundColor: "#9ADB7F" },
              ]}>
              <Feather name="check" size={wp(6)} />
            </View>
            <TouchableOpacity onPress={handleOnOpenImagePicker}>
              <Image
                source={
                  selectedIdDoc
                    ? { uri: selectedIdDoc.uri }
                    : AppImages.photoUploadFrame
                }
                style={styles.photoUpload}
                resizeMode={selectedIdDoc ? "cover" : "contain"}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.infoText}>Enter a valid drivers license</Text>
          <ButtonComponent
            text="Next"
            containerStyle={styles.nextButtonContainer}
            buttonStyle={styles.nextButton}
            textStyle={styles.nextButtonTitle}
            onPress={handleOnPressNext}
            disabled={!selectedIdDoc}
          />
        </View>
      </SafeAreaView>
      <ImagePickerSheet
        onSelectMedia={handleSelectImage}
        ref={imagePickerSheetRef}
      />
    </CustomBackgroundImage>
  );
};

export default IdVerification;

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flex: 1,
    marginTop: hp(2),
  },
  content: {
    paddingHorizontal: wp(7),
  },
  title: {
    marginTop: hp(4),
    color: Colors.white,
    fontSize: FontSizes.size32,
    fontFamily: FontFamily.Poppins.SemiBold,
    width: "60%",
    marginBottom: hp(2),
  },
  photoUploadRow: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(8),
    marginTop: hp(4),
  },
  uploadCheckItem: {
    height: wp(9),
    width: wp(9),
    borderRadius: wp(6),
    backgroundColor: "#70768A",
    justifyContent: "center",
    alignItems: "center",
  },
  photoUpload: {
    width: wp(52),
    height: hp(16.5),
  },
  infoText: {
    marginVertical: hp(4),
    color: Colors.white,
    textAlign: "center",
    fontFamily: FontFamily.Inter.Bold,
    fontSize: FontSizes.size15,
  },
  nextButtonContainer: {
    marginVertical: hp(3),
  },
  nextButton: {
    paddingHorizontal: wp(11),
  },
  nextButtonTitle: {
    fontFamily: FontFamily.Inter.Bold,
  },
});
