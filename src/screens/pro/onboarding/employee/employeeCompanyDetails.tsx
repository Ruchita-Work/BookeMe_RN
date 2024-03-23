import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  BackBox,
  ButtonComponent,
  CountryCodeInput,
  CustomBackgroundImage,
  CustomInput,
  CustomInputDropdown,
  KeyboardScrollView,
} from "@components";
import { AppImages } from "@assets";
import { hp, wp } from "@utils/responsive";
import { Colors, FontFamily, FontSizes } from "@theme";
import { useAppDispatch, useAppNavigation, useAppSelector } from "@hooks";
import {
  commonFormikInputProps,
  normalizeFormikError,
  numericKeyboardType,
} from "@utils/form";
import * as Yup from "yup";
import { useFormik } from "formik";
import { CountryItem } from "react-native-country-codes-picker";
import { AsYouType, validatePhoneNumberLength } from "libphonenumber-js";
import { onboardingActions } from "@redux/features";
import { ProEmployeeOnboardingDataType } from "@redux/features/onboarding/type";
import { getDefaultCountryCodeItem } from "@utils/helpers";

interface IFormikValues {
  phoneNumber: string;
  companyName: string;
  position: string;
}

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string().required("Please enter phone number"),
  companyName: Yup.string().required("Please enter company name"),
  position: Yup.string().required("Please select position"),
});

const initialValues: IFormikValues = {
  phoneNumber: "",
  companyName: "",
  position: "",
};

const EmployeeCompanyDetails = () => {
  const dispatch = useAppDispatch();
  const { navigation } = useAppNavigation();
  const [selectedCountry, setSelectedCountry] = useState<
    Omit<CountryItem, "name">
  >(getDefaultCountryCodeItem());
  const employeeOnboardingData = useAppSelector(
    state => state.onboarding.proOnboarding.employee,
  );

  const onSubmitHandler = (e: IFormikValues) => {
    const payload: Partial<ProEmployeeOnboardingDataType> = {
      companyPhoneNumber: e.phoneNumber,
      companyName: e.companyName,
      companyPosition: e.position,
      companyPhoneNumberCountryCode: selectedCountry.dial_code,
    };

    dispatch(onboardingActions.updateEmployeeOnboardingDetails(payload));
    navigation.navigate("IdVerification");
  };

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    touched,
    setFieldError,
  } = useFormik({
    validationSchema,
    initialValues,
    onSubmit: onSubmitHandler,
  });

  useEffect(() => {
    setFieldValue("companyName", employeeOnboardingData.companyName);
  }, [employeeOnboardingData.companyName]);

  const formatPhoneNumberHandler = (input: string) => {
    const formattedNumber = new AsYouType(selectedCountry.code as any).input(
      input,
    );
    return formattedNumber;
  };

  const onChangePhoneNumber = (phoneNumberText: string) => {
    const formattedNumber = formatPhoneNumberHandler(phoneNumberText);

    const numberValidLength = validatePhoneNumberLength(
      formattedNumber,
      selectedCountry.code as any,
    );

    if (numberValidLength !== undefined) {
      setFieldError(
        "phoneNumber",
        "Invalid Phone Number Length. Reason: " + numberValidLength,
      );
    }

    setFieldValue("phoneNumber", phoneNumberText);
  };

  const onPressCompanyName = () => {
    navigation.navigate("FindSalon");
  };

  return (
    <CustomBackgroundImage imageSource={AppImages.onboardingBackground}>
      <SafeAreaView style={styles.container}>
        <BackBox />
        <KeyboardScrollView contentContainerStyle={styles.keyboardScroll}>
          <Text style={styles.title}>Enter your Company Details</Text>
          <View style={{ rowGap: hp(2) }}>
            <CountryCodeInput
              label="Company Phone Number"
              value={values.phoneNumber}
              labelStyle={styles.inputLabel}
              style={styles.input}
              inputContainerStyle={styles.inputContainer}
              keyboardType={numericKeyboardType}
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              placeholder="Enter company phone number"
              onBlur={handleBlur("phoneNumber")}
              onChangeText={onChangePhoneNumber}
              error={normalizeFormikError(
                errors.phoneNumber,
                touched.phoneNumber,
              )}
            />
            <CustomInput
              label="Company Name"
              placeholder="Search company..."
              labelStyle={styles.inputLabel}
              style={styles.input}
              inputContainerStyle={styles.inputContainer}
              onPress={onPressCompanyName}
              {...commonFormikInputProps(
                "companyName",
                values,
                handleChange,
                handleBlur,
                touched,
                errors,
              )}
              renderAsTouchable
              renderRightContent={() => (
                <Image source={AppImages.search} style={styles.searchIcon} />
              )}
            />
            <CustomInputDropdown
              label="Company Position"
              items={[{ label: "Stylist", value: "Stylist" }]}
              placeholder="Select your position"
              rootlabelStyle={styles.inputLabel}
              setItems={() => {}}
              setValue={val => setFieldValue("position", val())}
              value={values.position}
              error={normalizeFormikError(errors.position, touched.position)}
            />
          </View>
          <ButtonComponent
            text="Next"
            containerStyle={styles.nextButtonContainer}
            buttonStyle={styles.nextButton}
            textStyle={styles.nextButtonTitle}
            onPress={() => handleSubmit()}
          />
        </KeyboardScrollView>
      </SafeAreaView>
    </CustomBackgroundImage>
  );
};

export default EmployeeCompanyDetails;

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flex: 1,
    marginTop: hp(2),
  },
  keyboardScroll: {
    paddingHorizontal: wp(6),
  },
  title: {
    marginVertical: hp(6),
    color: Colors.white,
    fontSize: FontSizes.size26,
    fontFamily: FontFamily.Poppins.SemiBold,
    width: "84%",
  },
  inputLabel: {
    textTransform: "uppercase",
    color: Colors.white,
    fontFamily: FontFamily.Inter.Bold,
    fontSize: FontSizes.size12,
  },
  input: {
    fontFamily: FontFamily.Inter.SemiBold,
    color: Colors.white,
  },
  inputContainer: {
    borderBottomColor: Colors.background2,
    paddingTop: hp(1.2),
  },
  nextButtonContainer: { marginVertical: hp(3) },
  nextButton: {
    paddingHorizontal: wp(11),
  },
  nextButtonTitle: { fontFamily: FontFamily.Inter.Bold },
  searchIcon: {
    height: wp(5),
    width: wp(5),
    marginHorizontal: wp(4),
  },
});
