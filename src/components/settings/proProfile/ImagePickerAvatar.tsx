import React, { FC } from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { wp } from "@utils/responsive";
import { Colors } from "@theme";
import { AppImages } from "@assets";
import FastImage, { Source } from "react-native-fast-image";

type IImagePickerAvatarProps = {
  image: Source;
  size?: number;
  containerStyle?: ViewStyle;
  showEditIcon?: boolean;
  onPress: () => void;
};

const ImagePickerAvatar: FC<IImagePickerAvatarProps> = ({
  image,
  size = wp(32),
  containerStyle,
  onPress,
  showEditIcon = true,
}) => {
  const containerSizeStyle: ViewStyle = {
    height: size,
    width: size,
    borderRadius: size / 2,
    borderWidth: (size * 4) / 128,
  };

  const editIconSizeStyle: ViewStyle = {
    height: size / 4,
    width: size / 4,
    borderRadius: size / 8,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.container, containerSizeStyle, containerStyle]}>
      <FastImage
        source={image?.uri ? { uri: image.uri, priority: "high" } : undefined}
        style={[
          styles.image,
          { borderRadius: containerSizeStyle.borderRadius },
        ]}
        defaultSource={AppImages.userAvatar}
      />
      {!!showEditIcon && (
        <View style={[styles.edit, editIconSizeStyle]}>
          <Image source={AppImages.edit} style={styles.editIcon} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ImagePickerAvatar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutral700,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.neutral700,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  edit: {
    backgroundColor: Colors.ebony,
    position: "absolute",
    bottom: "-5%",
    right: "13%",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  editIcon: {
    height: "50%",
    width: "50%",
  },
});
