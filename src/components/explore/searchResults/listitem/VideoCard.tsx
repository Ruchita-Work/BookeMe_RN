import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  ViewStyle,
} from "react-native";
import React, { FC } from "react";
import { wp } from "@utils/responsive";
import ViewCountWithIcon from "@components/ui/ViewCountWithIcon";

interface IVideoCardProps {
  image: ImageSourcePropType;
  viewCount?: string;
  containerStyle?: ViewStyle;
}

const VideoCard: FC<IVideoCardProps> = ({
  image,
  viewCount = "728.5K",
  containerStyle,
}) => {
  return (
    <ImageBackground
      source={image}
      style={[styles.backgroundImage, containerStyle]}>
      <ViewCountWithIcon viewCount={viewCount} />
    </ImageBackground>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  backgroundImage: {
    width: wp(27),
    aspectRatio: 0.6,
    borderRadius: wp(3),
    overflow: "hidden",
  },
});
