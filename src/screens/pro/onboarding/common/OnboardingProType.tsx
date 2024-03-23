import React, { useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import {
  BackButton,
  ButtonComponent,
  CustomBackgroundImage,
  CustomInput,
  Separator,
} from "@components";
import { AppImages } from "@assets";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp, wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";
import { useAppDispatch, useAppNavigation, useAppSelector } from "@hooks";
import {
  UpdateProUserTypeAndNameActionPayload,
  onboardingActions,
} from "@redux";
import { ProUserType } from "@types";

type SelectedProType = ProUserType | null;

const OnboardingProType = () => {
  const { top } = useSafeAreaInsets();
  const marginTopValue = top + Platform.select({ ios: hp(1), default: hp(2) });
  const { navigation } = useAppNavigation();
  const dispatch = useAppDispatch();
  const socialAuthName = useAppSelector(
    state => state.auth.socialSignin.data?.profile?.name,
  );

  const [selectedProType, setSelectedProType] = useState<SelectedProType>();
  const [name, setName] = useState(socialAuthName || "");

  const handleOnPressNext = () => {
    const payload: UpdateProUserTypeAndNameActionPayload = {
      name,
      proType: selectedProType,
    };
    dispatch(onboardingActions.updateProUserTypeAndName(payload));
    switch (selectedProType) {
      case "business":
        navigation.reset({ routes: [{ name: "AreaOfBusiness" }], index: 0 });
        break;
      case "indiePro":
        navigation.navigate("CreateIndieProBusiness");
        break;
      case "employee":
        navigation.navigate("EmployeeCompanyDetails");
        break;
      default:
        break;
    }
  };

  return (
    <CustomBackgroundImage imageSource={AppImages.userTypeBackground}>
      <View style={styles.container}>
        <BackButton containerStyle={{ marginTop: marginTopValue }} />
        <View style={styles.content}>
          <CustomInput
            label="Your name"
            placeholder="Enter name"
            containerStyle={styles.searchInputRootContainer}
            labelStyle={styles.searchInputLabel}
            inputContainerStyle={styles.searchInputContainer}
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.iamText}>I am a(n)</Text>
          <View style={{ rowGap: hp(1) }}>
            <View style={styles.buttonsRow}>
              <ButtonComponent
                buttonStyle={styles.button}
                textStyle={styles.buttonTitle}
                variant={selectedProType === "business" ? "fill" : "bordered"}
                text="business"
                onPress={() => setSelectedProType("business")}
              />
              <ButtonComponent
                buttonStyle={styles.button}
                textStyle={styles.buttonTitle}
                variant={selectedProType === "indiePro" ? "fill" : "bordered"}
                text="Indie Pro"
                onPress={() => setSelectedProType("indiePro")}
              />
            </View>
            <ButtonComponent
              buttonStyle={styles.button}
              textStyle={styles.buttonTitle}
              variant={selectedProType === "employee" ? "fill" : "bordered"}
              text="Employee"
              onPress={() => setSelectedProType("employee")}
            />
          </View>
          <Separator color={Colors.white} style={{ marginVertical: hp(3) }} />
          <ButtonComponent
            text="Next"
            onPress={handleOnPressNext}
            disabled={!selectedProType || !name.trim()}
            buttonStyle={{ paddingVertical: hp(1) }}
          />
        </View>
      </View>
    </CustomBackgroundImage>
  );
};

export default OnboardingProType;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: wp(2),
  },
  searchInputRootContainer: {
    alignSelf: "center",
    marginTop: hp(16),
    width: "100%",
  },
  searchInputLabel: {
    fontSize: FontSizes.size14,
    color: Colors.white,
    fontFamily: FontFamily.Inter.Bold,
  },
  searchInputContainer: {
    borderBottomColor: Colors.white,
    paddingTop: hp(1.2),
  },
  content: {
    width: wp(78),
    alignSelf: "center",
  },
  iamText: {
    color: Colors.white,
    fontSize: FontSizes.size30,
    fontFamily: FontFamily.Rubik.Bold,
    marginTop: hp(16),
  },
  buttonsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp(2),
  },
  button: {
    width: wp(37),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
  },
  buttonTitle: {
    textTransform: "uppercase",
    fontSize: FontSizes.size14,
    fontFamily: FontFamily.Rubik.Medium,
  },
});
