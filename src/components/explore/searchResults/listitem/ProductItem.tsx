import React, { FC } from "react";
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { hp, wp } from "@utils/responsive";
import ViewCountWithIcon from "@components/ui/ViewCountWithIcon";
import { AppImages } from "@assets";
import { Colors, FontSizes, FontFamily } from "@theme";

interface IProductItemProps {
  containerStyle?: ViewStyle;
  image: ImageSourcePropType;
  viewCount?: string;
  imageBackgroundStyle?: ImageStyle;
}

const ProductItem: FC<IProductItemProps> = ({
  containerStyle,
  image,
  viewCount = "728.5K",
  imageBackgroundStyle,
}) => {
  return (
    <View style={containerStyle}>
      <ImageBackground
        source={image}
        style={[styles.backgroundImage, imageBackgroundStyle]}>
        <ViewCountWithIcon
          viewCount={viewCount}
          tintColor={Colors.primaryBlue}
        />
      </ImageBackground>
      <View style={styles.profileInfo}>
        <Image
          style={styles.profileImage}
          source={AppImages.dummyProfileImage}
        />
        <Text numberOfLines={1} style={styles.profileName}>
          Chanel Perfume
        </Text>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  backgroundImage: {
    width: wp(43),
    aspectRatio: 0.62,
    borderRadius: wp(3),
    overflow: "hidden",
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(2),
    marginTop: hp(1),
    flex: 1,
  },
  profileImage: {
    height: wp(6),
    width: wp(6),
    borderRadius: wp(4),
  },
  profileName: {
    color: Colors.white,
    top: 0,
    fontSize: FontSizes.size13,
    lineHeight: hp(1.5),
    flex: 1,
    fontFamily: FontFamily.Urbanist.Medium,
  },
});
