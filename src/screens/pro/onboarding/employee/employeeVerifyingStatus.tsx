import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppImages } from "@assets";
import { BackBox, CustomBackgroundImage } from "@components";
import { hp, wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";

const EmployeeVerifyingStatus = () => {
  return (
    <CustomBackgroundImage imageSource={AppImages.onboardingBackground}>
      <SafeAreaView style={styles.container}>
        <BackBox />
        <View style={styles.content}>
          <Text style={styles.title}>Verifying Status</Text>
          <Image style={styles.image} source={AppImages.verifyingEmployee} />
          <Text style={styles.subtitle}>
            When your employer verifies the status of your employment you will
            be notified and granted access into the world of BookMe
          </Text>
        </View>
      </SafeAreaView>
    </CustomBackgroundImage>
  );
};

export default EmployeeVerifyingStatus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    marginTop: hp(2),
  },
  content: {
    alignItems: "center",
    paddingHorizontal: wp(10),
    rowGap: hp(6),
    marginTop: hp(6),
  },
  title: {
    color: Colors.white,
    fontFamily: FontFamily.Poppins.SemiBold,
    fontSize: FontSizes.size24,
    textAlign: "center",
  },
  image: {
    width: wp(40),
    height: hp(20),
  },
  subtitle: {
    fontSize: FontSizes.size14,
    color: Colors.white,
    fontFamily: FontFamily.Inter.Bold,
    textAlign: "center",
    lineHeight: hp(2.5),
  },
});
