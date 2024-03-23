import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CustomBackgroundImage, ButtonComponent, Separator } from "@components";
import { AppImages } from "@assets";
import { Colors, FontSizes, FontFamily } from "@theme";
import { useAppDispatch, useAppNavigation } from "@hooks";
import { hp, wp } from "@utils/responsive";
import { onboardingActions } from "@redux";
import { UserType } from "@types";

const Usertype = () => {
  const { navigation } = useAppNavigation();
  const dispatch = useAppDispatch();

  const handleSelectUserType = (actionUserType: UserType) => {
    dispatch(onboardingActions.setUserType(actionUserType));
    navigation.navigate(
      actionUserType === "CLIENT" ? "ClientOnboarding" : "OnboardingProType",
    );
  };

  return (
    <CustomBackgroundImage imageSource={AppImages.userTypeBackground}>
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
          <View>
            <Text style={styles.text}>I am a</Text>
            <Separator />
            <View style={styles.userTypeButtonsRow}>
              <ButtonComponent
                onPress={() => handleSelectUserType("CLIENT")}
                text="Customer"
                variant="bordered"
                textStyle={styles.buttonTitle}
                buttonStyle={styles.userButton}
              />
              <ButtonComponent
                onPress={() => handleSelectUserType("PRO")}
                text="Professional"
                variant="bordered"
                textStyle={styles.buttonTitle}
                buttonStyle={styles.userButton}
              />
            </View>
          </View>
        </View>
      </View>
    </CustomBackgroundImage>
  );
};

export default Usertype;

const styles = StyleSheet.create({
  buttonsContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: hp(22),
  },
  text: {
    color: Colors.white,
    textAlign: "left",
    width: "100%",
    fontSize: FontSizes.size42,
    fontFamily: FontFamily.Rubik.Bold,
  },
  container: {
    height: "100%",
    width: "100%",
  },
  userTypeButtonsRow: {
    flexDirection: "row",
    gap: wp(5),
  },
  userButton: {
    paddingVertical: hp(2),
  },
  buttonTitle: {
    fontFamily: FontFamily.Rubik.Medium,
    textTransform: "uppercase",
    fontSize: FontSizes.size14,
  },
});
