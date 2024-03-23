import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { hp, wp } from "@utils/responsive";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppImages } from "@assets";
import { Colors, FontSizes, FontFamily } from "@theme";
import {
  CustomBackgroundImage,
  ButtonComponent,
  CustomInput,
  BackBox,
  KeyboardScrollView,
  ImagePickerSheet,
} from "@components";
import { useClientOnboarding } from "@hooks";
import {
  commonFormikInputProps,
  normalizeFormikError,
  numericKeyboardType,
} from "@utils/form";
import FastImage from "react-native-fast-image";

const ClientOnboarding = () => {
  const { top } = useSafeAreaInsets();

  const {
    handleProfileImagePick,
    form,
    imagePickerSheetRef,
    onPressProfileImageSelect,
  } = useClientOnboarding();

  const {
    errors,
    touched,
    values,
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
  } = form;

  return (
    <CustomBackgroundImage
      childrenContainerStyle={styles.bgImageChild}
      imageSource={AppImages.onboardingBackground}>
      <BackBox style={{ marginTop: top + hp(2) }} />
      <KeyboardScrollView contentContainerStyle={styles.buttonsContainer}>
        <Text style={styles.text}>Welcome to</Text>
        <Text style={styles.text}>Bookme</Text>
        <Text style={styles.subText}>Let's start with the basic</Text>
        <TouchableOpacity
          onPress={onPressProfileImageSelect}
          style={styles.profileImageContainer}>
          {values.profileImage ? (
            <FastImage
              style={styles.profileImage}
              source={{ uri: values.profileImage.uri }}
            />
          ) : (
            <Image
              style={styles.placeholderProfileImage}
              source={AppImages.onboardingTeamLogo}
            />
          )}
        </TouchableOpacity>
        <View style={{ rowGap: hp(1) }}>
          <CustomInput
            placeholder="Stuart"
            label="FIRST NAME"
            labelStyle={styles.inputLabel}
            inputContainerStyle={styles.inputContainer}
            {...commonFormikInputProps(
              "firstName",
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
            )}
          />
          <CustomInput
            placeholder="Reichel"
            label="LAST NAME"
            labelStyle={styles.inputLabel}
            inputContainerStyle={styles.inputContainer}
            {...commonFormikInputProps(
              "lastName",
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
            )}
          />
          <CustomInput
            placeholder="22"
            label="AGE"
            labelStyle={styles.inputLabel}
            inputContainerStyle={styles.inputContainer}
            value={values.age.toString()}
            onChangeText={val => setFieldValue("age", isNaN(+val) ? val : +val)}
            onBlur={handleBlur("age")}
            error={normalizeFormikError(errors.age, touched.age)}
            keyboardType={numericKeyboardType}
          />
          <CustomInput
            placeholder="New York"
            label="City"
            labelStyle={styles.inputLabel}
            inputContainerStyle={styles.inputContainer}
            value={values.location}
            onChangeText={handleChange("location")}
            onBlur={handleBlur("location")}
            error={normalizeFormikError(errors.location, touched.location)}
          />
        </View>
        <ButtonComponent
          buttonStyle={{ marginTop: hp(2) }}
          onPress={() => handleSubmit()}
          text="Next"
          textStyle={{ fontFamily: FontFamily.Inter.Bold }}
        />
      </KeyboardScrollView>
      <ImagePickerSheet
        ref={imagePickerSheetRef}
        onSelectMedia={handleProfileImagePick}
        title="Select Profile Image"
      />
    </CustomBackgroundImage>
  );
};

export default ClientOnboarding;

const styles = StyleSheet.create({
  bgImageChild: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  buttonsContainer: {
    marginTop: hp(4),
    marginHorizontal: wp(6),
  },
  placeholderProfileImage: {
    width: wp(32),
    height: wp(32),
    resizeMode: "contain",
    alignSelf: "center",
    borderRadius: wp(18),
  },
  profileImage: {
    width: wp(28),
    height: wp(28),
    resizeMode: "contain",
    alignSelf: "center",
    borderRadius: wp(18),
    marginTop: hp(1.5),
  },
  subText: {
    color: Colors.white,
    fontSize: FontSizes.size16,
    marginTop: 14,
    fontFamily: FontFamily.Inter.Bold,
  },
  text: {
    color: Colors.white,
    fontSize: FontSizes.size32,
    fontFamily: FontFamily.Poppins.SemiBold,
  },
  container: {
    flex: 1,
  },
  profileImageContainer: {
    justifyContent: "center",
    marginVertical: hp(0.5),
    alignSelf: "center",
  },
  inputLabel: {
    color: Colors.white,
    fontFamily: FontFamily.Inter.Bold,
  },
  inputContainer: {
    borderBottomColor: Colors.background2,
  },
});
