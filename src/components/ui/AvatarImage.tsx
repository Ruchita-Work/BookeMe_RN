import React, { FC } from "react";
import { ImageStyle, StyleSheet, View, ViewStyle } from "react-native";
import FastImage, { Source } from "react-native-fast-image";
import { Colors } from "@theme";
import { AppImages } from "@assets";
import { wp } from "@utils/responsive";

interface IAvatarImageProps {
  size?: number;
  image: number | Source;
  style?: ViewStyle;
  imageStyle?: ImageStyle;
  isOnline?: boolean;
  onlineIndicatorScale?: number;
}

const AvatarImage: FC<IAvatarImageProps> = props => {
  const {
    size = wp(10),
    image,
    imageStyle,
    style,
    isOnline = false,
    onlineIndicatorScale = 1,
  } = props;

  const baseContainerStyle: ViewStyle = {
    height: size,
    width: size,
    borderRadius: size / 2,
  };

  const onlineSizeStyle: ViewStyle = {
    height: (size / 3.5) * onlineIndicatorScale,
    width: (size / 3.5) * onlineIndicatorScale,
    borderRadius: (size / 7) * onlineIndicatorScale,
    borderWidth: (size / 28) * onlineIndicatorScale,
  };

  return (
    <View style={[baseContainerStyle, style]}>
      <FastImage
        source={image}
        style={[styles.image, { borderRadius: size / 2 }, imageStyle]}
        defaultSource={AppImages.userAvatar}
      />
      {!!isOnline && <View style={[styles.online, onlineSizeStyle]} />}
    </View>
  );
};

export default AvatarImage;

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },
  online: {
    backgroundColor: Colors.green200,
    position: "absolute",
    bottom: "-4%",
    right: "4%",
    zIndex: 1,
  },
});
