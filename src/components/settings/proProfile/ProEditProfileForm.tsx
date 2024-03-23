import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import ImagePickerAvatar from "@components/settings/proProfile/ImagePickerAvatar";
import CustomInput from "@components/input/CustomInput";
import CountryCodeInput from "@components/input/CountryCodeInput";
import { hp, wp } from "@utils/responsive";
import { useEditProProfileForm } from "@hooks";
import { commonFormikInputProps, numericKeyboardType } from "@utils/form";

type IBaseHookProps = Pick<
  ReturnType<typeof useEditProProfileForm>,
  | "selectedCountry"
  | "setSelectedCountry"
  | "editProfileFormik"
  | "onChangePhoneNumber"
>;

interface IProEditProfileFormProps extends IBaseHookProps {
  onPressAvatar: () => void;
}

const ProEditProfileForm: FC<IProEditProfileFormProps> = ({
  onPressAvatar,
  selectedCountry,
  setSelectedCountry,
  editProfileFormik,
  onChangePhoneNumber,
}) => {
  const { errors, handleBlur, handleChange, touched, values } =
    editProfileFormik;

  return (
    <View>
      <ImagePickerAvatar
        containerStyle={styles.avatarImage}
        image={values.image}
        onPress={onPressAvatar}
      />
      <View style={styles.form}>
        <CustomInput
          label="Full Name"
          placeholder="Enter your full name"
          {...commonFormikInputProps(
            "fullName",
            values,
            handleChange,
            handleBlur,
            touched,
            errors,
          )}
        />
        <CustomInput
          label="Email"
          placeholder="Enter your email"
          {...commonFormikInputProps(
            "email",
            values,
            handleChange,
            handleBlur,
            touched,
            errors,
          )}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <CountryCodeInput
          selectedCountry={selectedCountry}
          maxLength={31}
          setSelectedCountry={setSelectedCountry}
          value={values.phoneNumber}
          onChangeText={onChangePhoneNumber}
          onBlur={handleBlur("phoneNumber")}
          error={touched.phoneNumber && errors.phoneNumber}
          keyboardType={numericKeyboardType}
        />
      </View>
    </View>
  );
};

export default ProEditProfileForm;

const styles = StyleSheet.create({
  avatarImage: {
    alignSelf: "center",
    marginTop: hp(2),
  },
  form: {
    paddingHorizontal: wp(5),
    marginTop: hp(5),
    rowGap: hp(0.5),
  },
});
