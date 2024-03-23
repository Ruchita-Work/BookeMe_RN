// BackgroundImage.js
import React, { FC } from "react";
import {
  ImageBackground,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

interface ICustomBackgroundImage {
  imageSource: any;
  children: any;
  opacity?: string;
  customStyle?: any;
  imageStyle?: any;
  childrenContainerStyle?: StyleProp<ViewStyle>;
}

const CustomBackgroundImage: FC<ICustomBackgroundImage> = ({
  imageSource,
  children,
  opacity,
  customStyle,
  imageStyle,
  childrenContainerStyle,
}) => {
  return (
    <ImageBackground
      source={{ uri: imageSource }}
      style={{
        ...styles.backgroundImage,
        backgroundColor: opacity || "rgba(0, 0, 0, 0.1)",
        ...imageStyle,
      }}>
      <View style={[styles.overlay, childrenContainerStyle]}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch' for other options
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Optional overlay to make text more readable
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomBackgroundImage;
