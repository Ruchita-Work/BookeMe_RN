import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppNavigation, useEditProProfileForm } from "@hooks";
import { FontFamily, FontSizes, Colors } from "@theme";
import { hp, wp } from "@utils/responsive";
import { AppLoader, ImagePickerSheet, ProEditProfileForm } from "@components";

const ProEditProfile = () => {
  const { navigation } = useAppNavigation();
  const { goBack } = navigation;

  const {
    onPressAvatar,
    selectedCountry,
    setSelectedCountry,
    editProfileFormik,
    onChangePhoneNumber,
    isLoading,
    imagePickerSheetRef,
    onSelectProfileImage,
  } = useEditProProfileForm();

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && <AppLoader />}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <AntDesign name="arrowleft" color={Colors.white} size={wp(6)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => editProfileFormik.handleSubmit()}>
          <Text style={styles.save}>Save</Text>
        </TouchableOpacity>
      </View>
      <ProEditProfileForm
        onPressAvatar={onPressAvatar}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        editProfileFormik={editProfileFormik}
        onChangePhoneNumber={onChangePhoneNumber}
      />
      <ImagePickerSheet
        ref={imagePickerSheetRef}
        onSelectMedia={onSelectProfileImage}
      />
    </SafeAreaView>
  );
};

export default ProEditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
  },
  header: {
    paddingHorizontal: wp(8),
    marginTop: hp(1),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  save: {
    color: Colors.primary,
    fontSize: FontSizes.size16,
    fontFamily: FontFamily.Poppins.Medium,
  },
});
