import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import {
  Composer,
  IMessage,
  InputToolbar,
  InputToolbarProps,
  Send,
} from "react-native-gifted-chat";
import { hp, wp } from "@utils/responsive";
import { launchCamera, launchImagePicker } from "@utils/mediaPicker";
import { AppImages } from "@assets";
import { ImagePickerAsset } from "expo-image-picker";
import { Colors, FontFamily, FontSizes } from "@theme";
import { Feather, Ionicons } from "@expo/vector-icons";

interface ChatInputProps extends InputToolbarProps<IMessage> {
  onSelectImage?: (results: ImagePickerAsset[]) => void;
}

const ChatInput: FC<ChatInputProps> = ({ onSelectImage, ...props }) => {
  const openGalleryHandler = () => {
    launchImagePicker({ selectionLimit: 1 })
      .then(onSelectImage)
      .catch(e => console.log(e));
  };

  const openCameraHandler = () => {
    launchCamera({ selectionLimit: 1 })
      .then(onSelectImage)
      .catch(e => console.log(e));
  };

  return (
    <InputToolbar
      {...props}
      containerStyle={styles.inputContainer}
      primaryStyle={{ alignItems: "center" }}
      renderComposer={composerProps => (
        <Composer {...composerProps} textInputStyle={styles.composer} />
      )}
      renderActions={() => {
        return (
          <View style={styles.actionsContainer}>
            <TouchableOpacity
              style={styles.actionItem}
              onPress={openCameraHandler}>
              <Feather name="camera" size={wp(5)} color={Colors.white} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionItem}
              onPress={openGalleryHandler}>
              <Image source={AppImages.gallery} style={styles.actionItemIcon} />
            </TouchableOpacity>
          </View>
        );
      }}
      renderSend={() => {
        return (
          <Send {...props} containerStyle={styles.sendButton}>
            <Ionicons name="arrow-up" size={wp(6)} color={Colors.white} />
          </Send>
        );
      }}
    />
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  composer: {
    fontSize: FontSizes.size14,
    fontFamily: FontFamily.Poppins.Regular,
    color: Colors.neutral400,
    paddingTop: hp(1),
    marginRight: wp(4),
  },
  inputContainer: {
    marginBottom: hp(0.5),
    backgroundColor: Colors.neutral800,
    borderTopWidth: 0,
    paddingHorizontal: wp(4),
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(2),
  },
  actionItem: {
    backgroundColor: Colors.primary,
    height: wp(10),
    width: wp(10),
    borderRadius: wp(6),
    justifyContent: "center",
    alignItems: "center",
  },
  actionItemIcon: {
    height: wp(5.5),
    width: wp(5.5),
    resizeMode: "contain",
  },
  sendButton: {
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    height: wp(10),
    width: wp(10),
    borderRadius: wp(6),
  },
});
