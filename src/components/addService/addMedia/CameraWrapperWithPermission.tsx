import React, { FC, PropsWithChildren } from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import { Camera } from "expo-camera";
import ButtonComponent from "@components/button/Button";
import { FontFamily, FontSizes, Colors } from "@theme";
import { hp } from "@utils/responsive";

const CameraWrapperWithPermission: FC<PropsWithChildren> = ({ children }) => {
  const [permission] = Camera.useCameraPermissions({
    request: true,
    get: true,
  });
  const [microphonePermission] = Camera.useMicrophonePermissions({
    request: true,
    get: true,
  });

  if (
    !permission ||
    !permission.granted ||
    !microphonePermission ||
    !microphonePermission.granted
  ) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Please give permission for camera & microphone to access this feature
        </Text>
        <ButtonComponent
          text="Open Settings"
          onPress={() => Linking.openSettings()}
        />
      </View>
    );
  }

  return children;
};

export default CameraWrapperWithPermission;

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.dark1,
  },
  errorText: {
    color: Colors.white,
    fontFamily: FontFamily.Poppins.Medium,
    fontSize: FontSizes.size22,
    textAlign: "center",
    lineHeight: hp(4),
  },
});
