import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import {
  AppHeader,
  ButtonComponent,
  CountryCodeInput,
  CustomInput,
  CustomInputDropdown,
  KeyboardScrollView,
  SelectLocationSheet,
} from "@components";
import { hp, wp } from "@utils/responsive";
import { AppImages } from "@assets";
import { createIndieProBusinessStyles as styles } from "@screens/pro/onboarding/indiePro/createIndieProBusinessStyles";
import { useAppSelector, useCreateIndieProBusiness } from "@hooks";
import { commonFormikInputProps, normalizeFormikError } from "@utils/form";
import { Feather } from "@expo/vector-icons";
import { Colors } from "@theme/colors";

const CreateIndieProBusiness = () => {
  const insets = useSafeAreaInsets();
  const name = useAppSelector(state => state.onboarding.proOnboarding?.name);

  const [dropdownItems] = useState([
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ]);

  const {
    form,
    handleSelectImage,
    handleOnpressBusinessAddress,
    selectLocationSheetRef,
    handleSelectDocument,
    selectedCountry,
    setSelectedCountry,
  } = useCreateIndieProBusiness();

  const {
    handleSubmit,
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    setFieldValue,
  } = form;

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <AppHeader title={name} hideAvatar />
      <View style={styles.body}>
        <KeyboardScrollView
          contentContainerStyle={{ paddingBottom: insets.bottom + hp(1) }}>
          <View style={styles.form}>
            <View style={styles.avatarSection}>
              <TouchableOpacity onPress={handleSelectImage}>
                <Image
                  style={styles.image}
                  source={
                    values.image
                      ? { uri: values.image.uri }
                      : AppImages.onboardingTeamLogo
                  }
                />
                <Text numberOfLines={1} style={styles.error}>
                  {normalizeFormikError(errors.image, touched.image) || ""}
                </Text>
              </TouchableOpacity>
              <Text numberOfLines={1} style={styles.avatarTitle}>
                {name}
              </Text>
              <Text numberOfLines={1} style={styles.avatarSubTitle}>
                Tap the logo to upload new logo
              </Text>
            </View>
            <CountryCodeInput
              label="Business Phone Number (Required)"
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              inputContainerStyle={styles.formInputContainer}
              labelStyle={styles.formInputLabel}
              {...commonFormikInputProps(
                "phoneNumber",
                values,
                handleChange,
                handleBlur,
                touched,
                errors,
              )}
            />
            <CustomInput
              labelStyle={styles.formInputLabel}
              style={styles.formInput}
              label="EIN"
              inputContainerStyle={styles.formInputContainer}
              maxLength={14}
              {...commonFormikInputProps(
                "ein",
                values,
                handleChange,
                handleBlur,
                touched,
                errors,
              )}
            />
            <CustomInput
              label="Company Name"
              inputContainerStyle={styles.formInputContainer}
              labelStyle={styles.formInputLabel}
              style={styles.formInput}
              {...commonFormikInputProps(
                "companyName",
                values,
                handleChange,
                handleBlur,
                touched,
                errors,
              )}
            />
            <CustomInput
              label="Business Address (Required)"
              inputContainerStyle={styles.formInputContainer}
              labelStyle={styles.formInputLabel}
              style={styles.formInput}
              renderRightContent={() => (
                <Image
                  source={AppImages.location}
                  style={styles.inputLocation}
                />
              )}
              renderAsTouchable
              value={values.businessAddress?.data?.description || ""}
              onPress={handleOnpressBusinessAddress}
              error={normalizeFormikError(
                errors.businessAddress,
                touched.businessAddress,
              )}
            />
            <CustomInputDropdown
              label="Do you rent a Space"
              items={dropdownItems}
              setItems={() => {}}
              setValue={value => {
                setFieldValue("rentASpace", value());
              }}
              value={values.rentASpace}
              error={normalizeFormikError(
                errors.rentASpace,
                touched.rentASpace,
              )}
            />
            <Text style={[styles.formInputLabel, { marginTop: hp(1) }]}>
              Beauty or Business License (Required)
            </Text>
            <View>
              <View style={styles.uploadDocRow}>
                <TouchableOpacity
                  style={styles.uploadDocButton}
                  onPress={handleSelectDocument}>
                  <Text style={styles.uploadDocText}>Upload document</Text>
                </TouchableOpacity>
                {!!values.businessLicense && (
                  <Feather size={wp(5)} name="check" color={Colors.green400} />
                )}
              </View>
              <Text
                style={[
                  styles.error,
                  { alignSelf: "flex-start", marginTop: hp(1) },
                ]}>
                {normalizeFormikError(
                  errors.businessLicense,
                  touched.businessLicense,
                )}
              </Text>
            </View>
            <ButtonComponent
              text="Next"
              containerStyle={styles.nextButtonContainer}
              buttonStyle={styles.nextButton}
              textStyle={styles.nextButtonText}
              onPress={() => handleSubmit()}
            />
          </View>
        </KeyboardScrollView>
      </View>
      <SelectLocationSheet
        onSelectLocation={(data, details) => {
          setFieldValue("businessAddress", { data, details });
          selectLocationSheetRef.current.close();
        }}
        ref={selectLocationSheetRef}
      />
    </SafeAreaView>
  );
};

export default CreateIndieProBusiness;
