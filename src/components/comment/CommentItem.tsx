import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AppImages } from "@assets";
import { hp, wp } from "@utils/responsive";
import { Colors, FontSizes, FontFamily } from "@theme";

const CommentItem: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={AppImages.dummyProfileAvatar}
        />
        <Text style={styles.name}>Kristin Watson</Text>
        <Image style={styles.moreCircle} source={AppImages.moreCircle} />
      </View>
      <Text style={styles.commentText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna.
      </Text>
      <View style={styles.footer}>
        <Image source={AppImages.heartRed} style={styles.heart} />
        <Text style={styles.likeCount}>938</Text>
        <Text style={styles.time}>3 days ago</Text>
      </View>
    </View>
  );
};

export default CommentItem;

const styles = StyleSheet.create({
  container: {
    rowGap: hp(1.5),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(3),
  },
  profileImage: {
    height: wp(12),
    width: wp(12),
    borderRadius: wp(7),
    overflow: "hidden",
  },
  name: {
    color: Colors.white,
    fontSize: FontSizes.size16,
    flex: 1,
    fontFamily: FontFamily.Urbanist.Bold,
  },
  moreCircle: {
    width: wp(6),
    height: wp(6),
  },
  commentText: {
    color: Colors.white,
    lineHeight: hp(2),
    fontFamily: FontFamily.Urbanist.Regular,
    fontSize: FontSizes.size15,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
  },
  heart: { width: wp(6), height: wp(6) },
  likeCount: {
    marginLeft: wp(2),
    color: Colors.white,
    fontSize: FontSizes.size13,
    top: -1,
    fontFamily: FontFamily.Urbanist.Medium,
  },
  time: {
    color: "#E0E0E0",
    top: -1,
    marginHorizontal: wp(5),
    fontFamily: FontFamily.Urbanist.Medium,
  },
});
