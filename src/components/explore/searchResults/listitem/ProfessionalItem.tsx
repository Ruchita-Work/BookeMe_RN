import React, { FC } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { hp, wp } from "@utils/responsive";
import { AppImages } from "@assets";
import { FontSizes, Colors, FontFamily } from "@theme";
import AvatarImage from "@components/ui/AvatarImage";

const ProfessionalItem: FC = () => {
  return (
    <View style={styles.container}>
      <AvatarImage size={wp(15)} image={AppImages.dummyProfileImage} />
      <View style={styles.profileInfoContainer}>
        <Text numberOfLines={1} style={styles.title}>
          Ariana Grande
        </Text>
        <Text numberOfLines={1} style={styles.subtitle}>
          arianagrande | 27.3M followers
        </Text>
      </View>
      <TouchableOpacity style={styles.request}>
        <Image style={styles.requestIcon} source={AppImages.addUser} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfessionalItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileInfoContainer: {
    flex: 1,
    marginHorizontal: wp(4),
    rowGap: hp(0.5),
    top: -hp(0.4),
  },
  title: {
    fontSize: FontSizes.size18,
    color: Colors.white,
    fontFamily: FontFamily.Urbanist.Bold,
  },
  subtitle: {
    color: Colors.gray300,
    fontFamily: FontFamily.Urbanist.Medium,
  },
  request: {
    height: wp(10),
    width: wp(10),
    borderRadius: wp(6),
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  requestIcon: {
    height: wp(5),
    width: wp(5),
  },
});
