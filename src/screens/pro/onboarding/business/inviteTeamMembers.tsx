import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppImages } from "@assets";
import {
  BackBox,
  ButtonComponent,
  CountryCodeInput,
  CustomBackgroundImage,
  CustomInput,
  CustomInputDropdown,
  KeyboardScrollView,
} from "@components";
import { Colors, FontFamily, FontSizes } from "@theme";
import { hp, wp } from "@utils/responsive";
import { useAppDispatch, useAppNavigation, useAppSelector } from "@hooks";
import { CountryItem } from "react-native-country-codes-picker";
import * as Yup from "yup";
import { useFormik } from "formik";
import { commonFormikInputProps, normalizeFormikError } from "@utils/form";
import { InvitedTeamMember, onboardingActions } from "@redux";
import throttle from "lodash/throttle";
import { getDefaultCountryCodeItem } from "@utils/helpers";

interface IFormikValues {
  firstName: string;
  lastName: string;
  email: string;
  inviteType: "PRO" | "EMPLOYEE" | "";
  phoneNumber: string;
  phoneNumberCountryCode: string;
  seatRent: string;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter first name"),
  lastName: Yup.string().required("Please enter last name"),
  email: Yup.string()
    .required("Please enter email")
    .email("Please enter valid email"),
  inviteType: Yup.string()
    .required("Please select invite type")
    .oneOf(["PRO", "EMPLOYEE"], "Invite type could be PRO or EMPLOYEE"),
  phoneNumber: Yup.string().required("Please enter phone number"),
  phoneNumberCountryCode: Yup.string().required("Please enter phone number"),
  seatRent: Yup.string()
    .required("Seat rent is required")
    .matches(/^-?\d+(\.\d+)?$/, "Seat Rent must be a Number"),
});

const initialFormState: IFormikValues = {
  firstName: "",
  lastName: "",
  email: "",
  inviteType: "",
  phoneNumber: "",
  phoneNumberCountryCode: "+1",
  seatRent: "",
};

const InviteTeamMembers = () => {
  const dispatch = useAppDispatch();
  const { navigation } = useAppNavigation();
  const [selectedCountry, setSelectedCountry] = useState<
    Omit<CountryItem, "name">
  >(getDefaultCountryCodeItem());
  const invitedPeople = useAppSelector(
    state => state.onboarding.proOnboarding?.business?.invitedPeople,
  );

  const handleInviteMember = async (values: IFormikValues) => {
    const phoneNumber = `${selectedCountry.dial_code}${values.phoneNumber}`;
    const invitedMemberData: InvitedTeamMember = {
      email: values.email,
      firstName: values.firstName,
      phoneNumber,
      lastName: values.lastName,
      seatRent: +values.seatRent,
      inviteType: values.inviteType || "EMPLOYEE",
    };
    dispatch(
      onboardingActions.updateBusinessOnboardingDetails({
        invitedPeople: [...invitedPeople, invitedMemberData],
      }),
    );
    navigation.navigate("CreateBusiness");
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik<IFormikValues>({
    initialValues: initialFormState,
    onSubmit: handleInviteMember,
    validationSchema,
  });

  return (
    <CustomBackgroundImage imageSource={AppImages.onboardingBackground}>
      <SafeAreaView style={styles.container}>
        <BackBox style={styles.backbox} />
        <Text style={styles.inviteTeamTitle}>Invite Team Member</Text>
        <KeyboardScrollView contentContainerStyle={styles.form}>
          <CustomInput
            label="First name"
            placeholder="Enter first name"
            inputContainerStyle={styles.formInputContainer}
            labelStyle={styles.formInputLabel}
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
            label="last name"
            placeholder="Enter last name"
            inputContainerStyle={styles.formInputContainer}
            labelStyle={styles.formInputLabel}
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
            label="Email"
            placeholder="Enter email"
            inputContainerStyle={styles.formInputContainer}
            labelStyle={styles.formInputLabel}
            {...commonFormikInputProps(
              "email",
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
            )}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View style={styles.inputsRow}>
            <CustomInputDropdown
              label="Pro or Employee"
              containerStyle={{
                ...styles.formInputContainer,
                ...styles.inputWithFixedWidth,
              }}
              rootlabelStyle={styles.inviteTypeLabel}
              items={[
                { label: "PRO", value: "PRO" },
                { label: "EMPLOYEE", value: "EMPLOYEE" },
              ]}
              setItems={() => {}}
              setValue={value => {
                setFieldValue("inviteType", value());
              }}
              value={values.inviteType}
              error={normalizeFormikError(
                errors.inviteType,
                touched.inviteType,
              )}
            />
            <CustomInput
              label="Seat Rent"
              placeholder="Enter Seat Rent"
              containerStyle={styles.inputWithFixedWidth}
              inputContainerStyle={styles.formInputContainer}
              labelStyle={styles.formInputLabel}
              {...commonFormikInputProps(
                "seatRent",
                values,
                handleChange,
                handleBlur,
                touched,
                errors,
              )}
            />
          </View>
          <CountryCodeInput
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
          <View style={styles.footer}>
            <ButtonComponent
              text="Add to invite list"
              buttonStyle={styles.inviteMemberButton}
              textStyle={styles.inviteMemberButtonText}
              onPress={() => throttle(handleSubmit, 1000)()}
            />
            <Text style={styles.footerInfoText}>
              All rent is processed on the 5th day of every month.
            </Text>
          </View>
        </KeyboardScrollView>
      </SafeAreaView>
    </CustomBackgroundImage>
  );
};

export default InviteTeamMembers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "flex-start",
    width: "100%",
  },
  backbox: {
    marginTop: hp(1),
  },
  inviteTeamTitle: {
    textAlign: "center",
    marginVertical: hp(4),
    color: Colors.white,
    fontSize: FontSizes.size30,
    fontFamily: FontFamily.Poppins.SemiBold,
  },
  formInputContainer: {
    borderBottomColor: Colors.background2,
  },
  formInputLabel: {
    textTransform: "uppercase",
  },
  inputsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  form: {
    paddingHorizontal: wp(8),
    rowGap: hp(1.5),
  },
  inputWithFixedWidth: {
    width: wp(37),
  },
  footer: {
    marginTop: "auto",
    marginBottom: hp(1),
    rowGap: hp(4),
    paddingHorizontal: wp(4),
  },
  footerInfoText: {
    color: Colors.white,
    fontSize: FontSizes.size12,
    textAlign: "center",
    fontStyle: "italic",
  },
  inviteMemberButtonText: {
    fontFamily: FontFamily.Inter.Bold,
    fontSize: FontSizes.size18,
  },
  inviteMemberButton: {
    marginTop: 0,
    width: "100%",
  },
  inviteTypeLabel: {
    textTransform: "uppercase",
    color: Colors.neutral400,
    fontFamily: FontFamily.Poppins.Regular,
    fontSize: FontSizes.size12,
    marginBottom: hp(0.2),
  },
});
