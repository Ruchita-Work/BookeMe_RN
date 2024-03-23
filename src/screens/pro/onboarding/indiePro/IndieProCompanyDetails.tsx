import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  BackBox,
  ButtonComponent,
  Checkbox,
  CustomBackgroundImage,
  CustomInput,
  KeyboardScrollView,
} from "@components";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppImages } from "@assets";
import { hp, wp } from "@utils/responsive";
import { Colors, FontFamily, FontSizes } from "@theme";
import { useAppDispatch, useAppNavigation, useAppSelector } from "@hooks";
import * as Yup from "yup";
import { useFormik } from "formik";
import { commonFormikInputProps, numericKeyboardType } from "@utils/form";
import { onboardingActions } from "@redux/features";
import { ProIndieProOnboardingDataType } from "@redux/features/onboarding/type";

interface IFormikValues {
  salonName: string;
  amount: "";
}

const initialValues: IFormikValues = {
  amount: "",
  salonName: "",
};

const validationSchema = Yup.object().shape({
  amount: Yup.string()
    .matches(/^[0-9]+$/gi, "Amount must be a Number")
    .required("Please enter amount"),
  salonName: Yup.string().required("Please enter salon name"),
});

const IndieProCompanyDetails = () => {
  const [isRentAgreed, setIsRentAgreed] = useState(false);
  const { navigation } = useAppNavigation();
  const dispatch = useAppDispatch();
  const indieProOnboardingData = useAppSelector(
    state => state.onboarding.proOnboarding.indiePro,
  );

  const onSubmitHandler = (e: IFormikValues) => {
    const payload: Partial<ProIndieProOnboardingDataType> = {
      rentSpaceDetails: {
        salonName: e.salonName,
        amount: +e.amount,
      },
    };

    dispatch(onboardingActions.updateIndieProOnboardingDetails(payload));
    navigation.navigate("IdVerification");
  };

  const {
    errors,
    values,
    touched,
    handleChange,
    handleBlur,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    validationSchema,
    initialValues,
    onSubmit: onSubmitHandler,
  });

  useEffect(() => {
    if (indieProOnboardingData.salonDetails) {
      setFieldValue("salonName", indieProOnboardingData.salonDetails?.name);
      setFieldValue(
        "amount",
        indieProOnboardingData.salonDetails?.seatRent?.toString(),
      );
    }
  }, [indieProOnboardingData.salonDetails]);

  const onPressSalonName = () => {
    navigation.navigate("FindSalon");
  };

  return (
    <CustomBackgroundImage imageSource={AppImages.onboardingBackground}>
      <SafeAreaView style={styles.container}>
        <BackBox />
        <KeyboardScrollView contentContainerStyle={styles.keyboardScroll}>
          <Text style={styles.title}>Salon Details</Text>
          <CustomInput
            label="Salon Name"
            placeholder="Search salon..."
            labelStyle={styles.inputLabel}
            style={styles.input}
            inputContainerStyle={styles.inputContainer}
            onPress={onPressSalonName}
            {...commonFormikInputProps(
              "salonName",
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
          <View style={styles.rowCenterSpaceBetween}>
            <CustomInput
              value="Yes"
              label="Seat Rent ?"
              labelStyle={styles.inputLabel}
              style={styles.input}
              inputContainerStyle={[
                styles.inputContainer,
                styles.rowInputWidth,
              ]}
              editable={false}
            />
            <CustomInput
              label="Amount"
              labelStyle={styles.inputLabel}
              style={styles.input}
              editable={false}
              inputContainerStyle={[
                styles.inputContainer,
                styles.rowInputWidth,
              ]}
              {...commonFormikInputProps(
                "amount",
                values,
                handleChange,
                handleBlur,
                touched,
                errors,
              )}
              keyboardType={numericKeyboardType}
            />
          </View>
          <View style={[styles.rowCenterSpaceBetween, styles.checkBoxRow]}>
            <Checkbox checked={isRentAgreed} onPress={setIsRentAgreed} />
            <Text style={styles.rentAgreement}>
              The owner of this salon has set the rent at the specified amount.
              Please check this box to confirm your acknowledgement
            </Text>
          </View>
          <View style={styles.footer}>
            <ButtonComponent
              text="Next"
              textStyle={styles.nextButtonText}
              buttonStyle={styles.nextButton}
              disabled={!isRentAgreed}
              onPress={() => handleSubmit()}
            />
          </View>
        </KeyboardScrollView>
      </SafeAreaView>
    </CustomBackgroundImage>
  );
};

export default IndieProCompanyDetails;

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flex: 1,
    marginTop: hp(2),
  },
  keyboardScroll: {
    paddingHorizontal: wp(6),
    rowGap: hp(2),
  },
  title: {
    marginVertical: hp(4),
    color: Colors.white,
    fontSize: FontSizes.size32,
    fontFamily: FontFamily.Poppins.SemiBold,
  },
  rowCenterSpaceBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputLabel: {
    textTransform: "uppercase",
    color: Colors.white,
    fontFamily: FontFamily.Inter.Bold,
  },
  input: {
    fontFamily: FontFamily.Inter.SemiBold,
    color: Colors.white,
  },
  rowInputWidth: {
    width: wp(40),
  },
  inputContainer: {
    borderBottomColor: Colors.background2,
    paddingTop: hp(1),
  },
  checkBoxRow: {
    paddingHorizontal: wp(2),
    columnGap: wp(3),
  },
  rentAgreement: {
    fontStyle: "italic",
    color: Colors.white,
    fontSize: FontSizes.size12,
    lineHeight: hp(2),
    marginRight: wp(4),
  },
  footer: {
    marginTop: hp(4),
    alignItems: "center",
  },
  nextButton: {
    paddingVertical: hp(1.5),
    marginTop: 0,
  },
  nextButtonText: {
    color: Colors.white,
    fontFamily: FontFamily.Inter.Bold,
    fontSize: FontSizes.size15,
  },
  searchIcon: {
    height: wp(5),
    width: wp(5),
    marginHorizontal: wp(4),
  },
});
