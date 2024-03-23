import React, { useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppImages } from "@assets";
import {
  AppLoader,
  BackBox,
  ButtonComponent,
  CustomBackgroundImage,
  ImagePickerSheet,
} from "@components";
import { hp, wp } from "@utils/responsive";
import { Feather } from "@expo/vector-icons";
import { useAppDispatch, useAppNavigation, useAppSelector } from "@hooks";
import { Colors, FontFamily, FontSizes } from "@theme";
import { authActions, onboardingActions } from "@redux/features";
import BottomSheet from "@gorhom/bottom-sheet";
import { ImagePickerAsset } from "expo-image-picker";
import {
  APIUploadVerificationDocsPayloadType,
  getCreateEmployeePayload,
  getCreateUserPayloadForEmployee,
  useAddUser,
  useCreateEmployee,
  useUploadVerificationDocs,
} from "@api";
import { showErrorToast } from "@utils/toast";
import { parseApiError } from "@utils/helpers";

const UploadCertificate = () => {
  const dispatch = useAppDispatch();
  const { navigation } = useAppNavigation();
  const imagePickerSheetRef = useRef<BottomSheet>(null);
  const { mutateAsync: mutateCreateEmployee } = useCreateEmployee();
  const { mutateAsync: mutateAddUser } = useAddUser();
  const { mutateAsync: mutateUploadVerificationDocs } =
    useUploadVerificationDocs();
  const [isLoading, setIsLoading] = useState(false);

  const selectedCertDoc = useAppSelector(
    state =>
      state.onboarding.proOnboarding[state.onboarding.proOnboarding.proType]
        .proCertificate,
  );

  const employeeOnboardingData = useAppSelector(
    state => state.onboarding.proOnboarding.employee,
  );

  const [selectedCertificate, setSelectedCertificate] =
    useState<ImagePickerAsset | null>(selectedCertDoc || null);

  const proType = useAppSelector(
    state => state.onboarding.proOnboarding.proType,
  );

  const handleSelectImage = async (medias: ImagePickerAsset[]) => {
    setSelectedCertificate(medias[0]);
  };

  const handleOnOpenImagePicker = () => {
    imagePickerSheetRef?.current?.snapToIndex(0);
  };

  const handleOnPressNext = async () => {
    dispatch(onboardingActions.updateCertificate(selectedCertificate));

    if (proType === "employee") {
      try {
        setIsLoading(true);
        // Create User
        const addUserPayload = getCreateUserPayloadForEmployee();
        const addUserResponse = await mutateAddUser(addUserPayload);

        // Create Business User
        const employeePayload = getCreateEmployeePayload();
        await mutateCreateEmployee(employeePayload);

        // Upload Id Verification Docs
        const payload: APIUploadVerificationDocsPayloadType = {
          id: employeeOnboardingData.idDocument,
          certificate: selectedCertificate,
          selfie: employeeOnboardingData.selfie,
        };
        await mutateUploadVerificationDocs(payload);

        dispatch(authActions.loginUser(addUserResponse.data?.data));

        navigation.reset({ routes: [{ name: "ProHomeTabs" }], index: 0 });
      } catch (error) {
        showErrorToast({
          text1: "Failed to register",
          text2:
            parseApiError(error) ||
            "Failed to register! Please try again after sometime",
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      navigation.navigate("BusinessPaywall");
    }
  };

  return (
    <CustomBackgroundImage imageSource={AppImages.onboardingBackground}>
      {!!isLoading && <AppLoader />}
      <SafeAreaView style={styles.container}>
        <BackBox />
        <View style={styles.content}>
          <Text style={styles.title}>
            Professional Certificate Verification
          </Text>
          <View style={styles.photoUploadRow}>
            <View
              style={[
                styles.uploadCheckItem,
                selectedCertificate && { backgroundColor: "#9ADB7F" },
              ]}>
              <Feather name="check" size={wp(6)} />
            </View>
            <TouchableOpacity onPress={handleOnOpenImagePicker}>
              <Image
                source={
                  selectedCertificate
                    ? { uri: selectedCertificate.uri }
                    : AppImages.photoUploadFrame
                }
                style={styles.photoUpload}
                resizeMode={selectedCertificate ? "cover" : "contain"}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.infoText}>
            Upload your professional certificate
          </Text>
          <ButtonComponent
            text={proType === "employee" ? "Register" : "Next"}
            containerStyle={styles.nextButtonContainer}
            buttonStyle={styles.nextButton}
            textStyle={styles.nextButtonTitle}
            onPress={handleOnPressNext}
            disabled={!selectedCertificate}
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

export default UploadCertificate;

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
    fontSize: FontSizes.size26,
    fontFamily: FontFamily.Poppins.SemiBold,
    width: "90%",
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
