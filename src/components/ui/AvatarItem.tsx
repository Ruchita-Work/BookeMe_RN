import React, { FC } from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { hp, normalize, wp } from "@utils/responsive";
import { Colors, FontSizes, FontFamily } from "@theme";

interface IAvatarItemProps {
  image: ImageSourcePropType;
  title: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  imageStyle?: ImageStyle;
  onPress?: () => void;
}

const AvatarItem: FC<IAvatarItemProps> = ({
  image,
  title,
  containerStyle,
  imageStyle,
  titleStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Image
        style={[styles.image, imageStyle]}
        source={image}
        resizeMode="contain"
      />
      <Text numberOfLines={1} style={[styles.title, titleStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AvatarItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    rowGap: hp(1.5),
  },
  image: {
    width: wp(15),
    height: hp(8),
  },
  title: {
    fontSize: FontSizes.size15,
    lineHeight: normalize(18),
    color: Colors.white,
    textAlign: "center",
    fontFamily: FontFamily.Rubik.Regular,
  },
});
