import React, { FC } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { hp, wp } from "@utils/responsive";
import { AppImages } from "@assets";
import { FontFamily, FontSizes, Colors } from "@theme";

interface IAddServiceCameraOptionsProps {
  toggleCameraType: () => void;
  onCaptureImage: () => void;
}

const AddServiceCameraOptions: FC<IAddServiceCameraOptionsProps> = ({
  onCaptureImage,
  toggleCameraType,
}) => {
  return (
    <>
      <View style={styles.videoTag}>
        <Ionicons name="videocam" size={wp(5)} color={Colors.white} />
        <Text style={styles.videoText}>Image</Text>
      </View>
      <MaterialCommunityIcons
        style={styles.switchCameraIcon}
        name="camera-flip"
        size={wp(10)}
        color={Colors.white}
        onPress={toggleCameraType}
      />

      <View style={styles.videoControls}>
        <View style={styles.optionContainer}>
          <Image source={AppImages.videoEffects} style={styles.optionImage} />
          <Text style={styles.optionTitle}>Effects</Text>
        </View>
        <TouchableOpacity
          onPress={onCaptureImage}
          style={styles.recordButton}
        />
        <View style={styles.optionContainer}>
          <Image source={AppImages.upload} style={styles.optionImage} />
          <Text style={styles.optionTitle}>Upload</Text>
        </View>
      </View>
    </>
  );
};

export default AddServiceCameraOptions;

const styles = StyleSheet.create({
  videoTag: {
    backgroundColor: Colors.dark3 + "99",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: hp(0.7),
    paddingHorizontal: wp(4),
    borderRadius: wp(10),
    columnGap: wp(2),
  },
  videoText: {
    fontSize: FontSizes.size16,
    color: Colors.white,
    fontFamily: FontFamily.Urbanist.SemiBold,
    top: -1,
  },
  videoControls: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(12),
    marginTop: hp(4),
  },
  optionContainer: {
    alignItems: "center",
    rowGap: hp(1),
  },
  optionImage: {
    height: wp(9),
    width: wp(9),
  },
  optionTitle: {
    fontSize: FontSizes.size16,
    color: Colors.white,
    fontFamily: FontFamily.Urbanist.Medium,
  },
  recordButton: {
    height: wp(20),
    width: wp(20),
    borderRadius: wp(11),
    borderWidth: wp(1.5),
    borderColor: Colors.white,
    backgroundColor: Colors.primary,
  },
  switchCameraIcon: {
    position: "absolute",
    right: wp(8),
    top: -hp(0.7),
  },
});
