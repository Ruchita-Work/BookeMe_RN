import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC, ReactNode } from "react";
import { hp, wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";
import { AppImages } from "@assets";
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";

const ChipItem = ({ title, image }: { title: string; image: ReactNode }) => {
  return (
    <TouchableOpacity style={styles.chipItem}>
      {image}
      <Text style={styles.chipTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const chipTagdata = [
  {
    icon: <FontAwesome5 name="hashtag" size={wp(3)} color={Colors.primary} />,
    title: "Hashtag",
  },
  {
    icon: <Feather name="at-sign" size={wp(3)} color={Colors.primary} />,
    title: "Mention",
  },
  {
    icon: <Ionicons name="videocam" size={wp(3)} color={Colors.primary} />,
    title: "Videos",
  },
];

const PostDetailsCoverHeader: FC = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. #viral
            #handsome #man
          </Text>
        </View>
        <ImageBackground
          source={AppImages.dummyProductImage}
          style={styles.coverImage}>
          <Text style={styles.selectCover}>Select Cover</Text>
        </ImageBackground>
      </View>

      <View style={styles.chipsRow}>
        {chipTagdata.map((item, index) => (
          <ChipItem
            image={item.icon}
            title={item.title}
            key={`${item}-${index}`}
          />
        ))}
      </View>
    </View>
  );
};

export default PostDetailsCoverHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(3),
    justifyContent: "space-between",
  },
  descriptionContainer: {
    backgroundColor: Colors.dark2,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    borderRadius: wp(3),
    width: wp(62),
  },
  description: {
    color: Colors.white,
    fontFamily: FontFamily.Urbanist.Medium,
    fontSize: FontSizes.size16,
  },
  coverImage: {
    height: "98%",
    borderRadius: wp(2),
    overflow: "hidden",
    width: wp(24),
  },
  selectCover: {
    marginTop: "105%",
    textAlign: "center",
    fontSize: FontSizes.size12,
    color: Colors.white,
    fontFamily: FontFamily.Urbanist.Medium,
  },
  chipsRow: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(2),
    marginTop: hp(2),
  },
  chipItem: {
    paddingHorizontal: wp(3),
    borderWidth: 2,
    borderColor: Colors.primary,
    paddingVertical: hp(0.7),
    borderRadius: wp(10),
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(2),
  },
  chipTitle: {
    color: Colors.primary,
    fontFamily: FontFamily.Urbanist.SemiBold,
    fontSize: FontSizes.size14,
  },
});
