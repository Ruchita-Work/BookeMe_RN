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
import { Colors, FontFamily, FontSizes } from "@theme";
import { useAppDispatch, useAppNavigation, useAppSelector } from "@hooks";
import { ImagePickerAsset, CameraType } from "expo-image-picker";
import { onboardingActions } from "@redux/features";
import BottomSheet from "@gorhom/bottom-sheet";

const UploadSelfie = () => {
  const dispatch = useAppDispatch();
  const { navigation } = useAppNavigation();
  const imagePickerSheetRef = useRef<BottomSheet>(null);

  const selectedIdDoc = useAppSelector(
    state =>
      state.onboarding.proOnboarding[state.onboarding.proOnboarding.proType]
        .selfie,
  );

  const handleOnOpenImagePicker = () => {
    imagePickerSheetRef?.current?.snapToIndex(0);
  };

  const handleSelectImage = async (medias: ImagePickerAsset[]) => {
    dispatch(onboardingActions.updateSelfie(medias[0]));
  };

  const handleOnPressNext = () => {
    navigation.navigate("UploadCertificate");
  };

  return (
    <CustomBackgroundImage imageSource={AppImages.onboardingBackground}>
      <SafeAreaView style={styles.container}>
        <BackBox />
        <View style={styles.content}>
          <Text style={styles.title}>Identity Verification</Text>
          <TouchableOpacity onPress={handleOnOpenImagePicker}>
            <Image
              source={
                selectedIdDoc ? { uri: selectedIdDoc.uri } : AppImages.camera
              }
              style={styles.camera}
              resizeMode={selectedIdDoc ? "cover" : "contain"}
            />
          </TouchableOpacity>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              Upload a valid photo for authentication
            </Text>
            <Text style={[styles.infoText, styles.extraInfoText]}>
              Please take a photo in a well lit area and place your face
              directly in the camera
            </Text>
          </View>

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
        cameraOptions={{ allowsEditing: true, cameraType: CameraType.front }}
      />
    </CustomBackgroundImage>
  );
};

export default UploadSelfie;

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
  },
  infoText: {
    color: Colors.white,
    fontFamily: FontFamily.Inter.Bold,
    fontSize: FontSizes.size15,
    lineHeight: hp(2.5),
  },
  camera: {
    width: wp(43),
    height: hp(17.5),
    alignSelf: "center",
    marginVertical: hp(4),
  },
  infoContainer: {
    width: wp(68),
    alignSelf: "center",
  },
  extraInfoText: {
    marginVertical: hp(1.5),
    textAlign: "left",
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
