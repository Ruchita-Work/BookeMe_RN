import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Colors } from "@theme";
import {
  AppHeader,
  AppLoader,
  ButtonComponent,
  CountryCodeInput,
  CustomInput,
  ImagePickerAvatar,
  ImagePickerSheet,
  InvitedMemberItem,
  KeyboardScrollView,
  SelectLocationSheet,
} from "@components";
import { hp, wp } from "@utils/responsive";
import { AppImages } from "@assets";
import { Entypo, Feather } from "@expo/vector-icons";
import { createBusinessStyles as styles } from "@screens/pro/onboarding/business/createBusinessStyles";
import { useCreateBusiness } from "@hooks";
import {
  commonFormikInputProps,
  normalizeFormikError,
  numericKeyboardType,
} from "@utils/form";

const CreateBusiness = () => {
  const { bottom } = useSafeAreaInsets();
  const {
    handleSelectMedia,
    onPressAvatar,
    imagePickerSheetRef,
    onInviteTeamMembers,
    createBusinessFormik,
    handleSelectDocument,
    handleOnpressBusinessAddress,
    selectLocationSheetRef,
    isLoading,
    proOnboardingData,
    selectedCountry,
    setSelectedCountry,
  } = useCreateBusiness();

  const {
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    setFieldValue,
    touched,
  } = createBusinessFormik;

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      {isLoading && <AppLoader />}
      <AppHeader title={proOnboardingData.name} hideAvatar />
      <View style={styles.body}>
        <KeyboardScrollView>
          <View style={{ alignItems: "center" }}>
            <ImagePickerAvatar
              size={wp(28)}
              showEditIcon={false}
              image={{ uri: values.logo?.uri }}
              containerStyle={styles.imageAvatar}
              onPress={onPressAvatar}
            />
            <Text style={styles.avatarTitle}>{proOnboardingData.name}</Text>
            <Text style={styles.avatarSubTitle}>
              Tap the logo to upload new logo
            </Text>
          </View>
          <View style={{ marginVertical: hp(2) }}>
            <Text style={styles.inputLabel}>
              How many seats are in your business
            </Text>
            <View style={styles.seatsCountRow}>
              <Text style={styles.seatsCountText}>1-3</Text>
              <Image source={AppImages.team} style={styles.businessSeatIcon} />
            </View>
          </View>
          <CustomInput
            label="Seat Rent (Required)"
            placeholder="Enter seat rent"
            labelStyle={styles.inputLabel}
            inputContainerStyle={styles.formInputContainer}
            {...commonFormikInputProps(
              "seatRent",
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
            )}
          />
          <CustomInput
            label="Business Address (Required)"
            placeholder="Select business address"
            renderRightContent={() => (
              <Image source={AppImages.location} style={styles.inputLocation} />
            )}
            containerStyle={styles.input}
            labelStyle={styles.inputLabel}
            inputContainerStyle={styles.formInputContainer}
            renderAsTouchable
            value={values.businessAddress?.data?.description || ""}
            onPress={handleOnpressBusinessAddress}
            error={normalizeFormikError(
              errors.businessAddress,
              touched.businessAddress,
            )}
          />
          <CustomInput
            label="Business EIN (Required)"
            placeholder="Enter business EIN"
            labelStyle={styles.inputLabel}
            inputContainerStyle={styles.formInputContainer}
            maxLength={10}
            {...commonFormikInputProps(
              "ein",
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
            )}
          />
          <CountryCodeInput
            label="Business Phone Number (Required)"
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            inputContainerStyle={styles.formInputContainer}
            labelStyle={styles.inputLabel}
            {...commonFormikInputProps(
              "phoneNumber",
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
            )}
          />
          <View style={{ marginTop: hp(1) }}>
            <Text style={styles.inputLabel}>
              Beauty or Business License (Required)
            </Text>
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
            <Text style={styles.error}>
              {normalizeFormikError(
                errors.businessLicense,
                touched.businessLicense,
              )}
            </Text>
          </View>
          <View style={styles.invitedPeopleSection}>
            <Text style={styles.inputLabel}>
              invite people to your business
            </Text>
            <View style={styles.invitePeopleRow}>
              <Text style={styles.invitePeopleValue}>
                Email, Name, or Phone{" "}
              </Text>
              <TouchableOpacity onPress={onInviteTeamMembers}>
                <Entypo name="plus" color={Colors.white} size={wp(5)} />
              </TouchableOpacity>
            </View>
            {proOnboardingData.business?.invitedPeople?.map((item, index) => (
              <InvitedMemberItem data={item} key={`invitedPeople-${index}`} />
            ))}
          </View>
          <ButtonComponent
            containerStyle={[
              styles.nextButtonContainer,
              { marginBottom: bottom + hp(1) },
            ]}
            buttonStyle={styles.nextButton}
            textStyle={styles.nextButtonText}
            text="Next"
            onPress={() => handleSubmit()}
          />
        </KeyboardScrollView>
      </View>
      <ImagePickerSheet
        ref={imagePickerSheetRef}
        onSelectMedia={handleSelectMedia}
        title="Select Business Logo"
      />
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

export default CreateBusiness;
