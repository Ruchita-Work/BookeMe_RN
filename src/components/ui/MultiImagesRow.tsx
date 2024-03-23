import React, { FC } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { wp } from "@utils/responsive";
import { FontFamily, FontSizes, Colors } from "@theme";

interface IMultiImagesRowProps {
  images: ImageSourcePropType[];
  imageSize: number;
  showTrailingCount?: boolean;
  trailingCount?: string;
}

const MultiImagesRow: FC<IMultiImagesRowProps> = ({
  images = [],
  imageSize = wp(10),
  showTrailingCount = true,
  trailingCount = "500+",
}) => {
  const getAvatarStyle = (index: number) => ({
    height: imageSize,
    width: imageSize,
    borderRadius: imageSize / 2,
    marginLeft: index ? -wp(2) : 0,
  });

  const localImagesList = showTrailingCount
    ? [...images, { uri: "trailingCount" }]
    : images;

  return (
    <View style={styles.container}>
      {localImagesList.map((item, index) => {
        if (typeof item === "object" && item.uri === "trailingCount") {
          return (
            <View
              key={`MultiImagesRow-${index}`}
              style={[getAvatarStyle(index), styles.trailingCountContainer]}>
              <Text style={styles.trailingCountText}>{trailingCount}</Text>
            </View>
          );
        }

        return (
          <Image
            key={`MultiImagesRow-${index}`}
            source={item}
            style={getAvatarStyle(index)}
          />
        );
      })}
    </View>
  );
};

export default MultiImagesRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  trailingCountContainer: {
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  trailingCountText: {
    fontSize: FontSizes.size10,
    color: Colors.white,
    fontFamily: FontFamily.Inter.Bold,
  },
});
