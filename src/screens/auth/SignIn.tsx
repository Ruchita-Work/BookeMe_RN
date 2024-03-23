import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { hp, wp } from "@utils/responsive";
import {
  CustomBackgroundImage,
  Separator,
  ButtonWithIcon,
  AppLoader,
} from "@components";
import { AppImages } from "@assets";
import { Colors, FontSizes, FontFamily } from "@theme";
import { useSignIn } from "@hooks";

const Signin = () => {
  const {
    onGoogleSignInPress,
    onAppleSigninPress,
    onFacebookSigninPress,
    isLoading,
  } = useSignIn();

  return (
    <CustomBackgroundImage imageSource={AppImages.signinBackground}>
      {isLoading && <AppLoader />}
      <View style={styles.buttonsContainer}>
        <View>
          <Text style={styles.text}>See It. Want It.</Text>
          <Text style={styles.text}>Get It.</Text>
          <Separator />
          <View style={styles.socialButtons}>
            {Platform.OS === "ios" && (
              <ButtonWithIcon
                onPress={onAppleSigninPress}
                text="Continue with Apple"
                icon={<AntDesign name="apple1" size={wp(6)} color="black" />}
              />
            )}
            <ButtonWithIcon
              onPress={onGoogleSignInPress}
              text="Continue with Google"
              icon={<AntDesign name="google" size={wp(6)} color="black" />}
            />
            <ButtonWithIcon
              onPress={onFacebookSigninPress}
              text="Continue with Facebook"
              icon={
                <AntDesign name="facebook-square" size={wp(6)} color="black" />
              }
            />
          </View>
        </View>
      </View>
    </CustomBackgroundImage>
  );
};

export default Signin;

const styles = StyleSheet.create({
  buttonsContainer: {
    width: "100%",
    height: hp(75),
    alignItems: "center",
    justifyContent: "flex-end",
  },
  text: {
    color: Colors.white,
    textAlign: "left",
    width: "100%",
    fontSize: FontSizes.size42,
    fontFamily: FontFamily.Rubik.Bold,
  },
  container: {
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    alignItems: "flex-end",
  },
  signinRow: {
    flexDirection: "row",
    marginRight: wp(4),
    alignItems: "center",
  },
  signinButton: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  socialButtons: {
    rowGap: hp(2),
    marginTop: hp(2),
  },
  signinText: {
    color: Colors.white,
    textAlign: "center",
    fontSize: FontSizes.size18,
    fontFamily: FontFamily.Poppins.Medium,
    paddingHorizontal: wp(2),
  },
});
