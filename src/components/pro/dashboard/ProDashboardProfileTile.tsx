import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { hp, wp } from "@utils/responsive";
import { AppImages } from "@assets";
import { FontFamily, FontSizes, Colors } from "@theme";
import AvatarImage from "@components/ui/AvatarImage";

const ProDashboardProfileTile: FC = () => {
  return (
    <View style={styles.container}>
      <AvatarImage size={wp(17.5)} image={AppImages.dummyProfileAvatar} />
      <View style={styles.body}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Beauty Bar</Text>
          <Image source={AppImages.verified} style={styles.verifiedImage} />
        </View>
        <Text style={styles.subtitle}>@beautybar</Text>
      </View>
      <Entypo
        name="chevron-thin-right"
        size={wp(5)}
        color={Colors.primaryBlue}
      />
    </View>
  );
};

export default ProDashboardProfileTile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(5),
    marginTop: hp(2),
    flexDirection: "row",
    alignItems: "center",
  },
  body: {
    flex: 1,
    marginHorizontal: wp(3),
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: Colors.white,
    fontSize: FontSizes.size24,
    lineHeight: hp(3),
    marginRight: wp(2),
    fontFamily: FontFamily.Poppins.Medium,
  },
  verifiedImage: {
    height: wp(5),
    width: wp(5),
  },
  subtitle: {
    color: Colors.white + 80,
    fontSize: FontSizes.size16,
    lineHeight: hp(2.5),
    marginTop: hp(0.5),
    fontFamily: FontFamily.Urbanist.Medium,
  },
});
