import React, { FC, useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { hp, wp } from "@utils/responsive";
import { AppImages } from "@assets";
import { FontFamily, FontSizes, Colors } from "@theme";

interface IAddServiceQuickVideoOptionsProps {
  toggleCameraType: () => void;
  onStartRecording: () => void;
  onStopRecording: () => void;
}

const AddServiceQuickVideoOptions: FC<IAddServiceQuickVideoOptionsProps> = ({
  toggleCameraType,
  onStartRecording,
  onStopRecording,
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  let recordingTimeoutRef = useRef(null);

  const handleRecordingStartStop = () => {
    if (isRecording) {
      if (recordingTimeoutRef.current) {
        clearInterval(recordingTimeoutRef.current);
        setRecordingTime(0);
      }
      onStopRecording();
    } else {
      onStartRecording();
      recordingTimeoutRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    }
    setIsRecording(prev => !prev);
  };

  const getMinuteAndSeconds = (recordingTimeSeconds: number) => {
    const minutes = Math.floor(recordingTimeSeconds / 60);
    const seconds = recordingTimeSeconds - minutes * 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <View style={styles.videoTag}>
        <Ionicons name="videocam" size={wp(5)} color={Colors.white} />
        <Text style={styles.videoText}>Video</Text>
      </View>
      {!isRecording && (
        <MaterialCommunityIcons
          style={styles.switchCameraIcon}
          name="camera-flip"
          size={wp(10)}
          color={Colors.white}
          onPress={toggleCameraType}
        />
      )}
      {!!recordingTime && (
        <Text style={styles.recordingTime}>
          {getMinuteAndSeconds(recordingTime)}
        </Text>
      )}
      <View style={styles.videoControls}>
        <View style={styles.optionContainer}>
          <Image source={AppImages.videoEffects} style={styles.optionImage} />
          <Text style={styles.optionTitle}>Effects</Text>
        </View>
        <TouchableOpacity
          onPress={handleRecordingStartStop}
          style={[
            styles.recordButton,
            isRecording && { backgroundColor: "red" },
          ]}
        />
        <View style={styles.optionContainer}>
          <Image source={AppImages.upload} style={styles.optionImage} />
          <Text style={styles.optionTitle}>Upload</Text>
        </View>
      </View>
    </>
  );
};

export default AddServiceQuickVideoOptions;

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
  recordingTime: {
    zIndex: 99999,
    marginTop: hp(4),
    color: Colors.white,
    fontFamily: FontFamily.Poppins.Medium,
    fontSize: FontSizes.size24,
  },
});
