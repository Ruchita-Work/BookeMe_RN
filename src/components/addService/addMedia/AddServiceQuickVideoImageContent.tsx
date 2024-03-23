import React, { FC, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Camera } from "expo-camera";
import { hp, wp } from "@utils/responsive";
import { AddServiceContext } from "@context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CameraWrapperWithPermission from "@components/addService/addMedia/CameraWrapperWithPermission";
import AddServiceCameraOptions from "@components/addService/addMedia/AddServiceCameraOptions";
import AddServiceQuickVideoOptions from "@components/addService/addMedia/AddServiceQuickVideoOptions";
import AddServiceVideoBottomOptions from "@components/addService/addMedia/AddServiceVideoBottomOptions";

const AddServiceQuickVideoImageContent: FC = () => {
  const {
    cameraRef,
    type,
    selectedMediaTab,
    toggleCameraType,
    captureImageHandler,
    startRecordingHandler,
    stopRecordingHandler,
    setSelectedMediaTab,
    assetUri,
  } = useContext(AddServiceContext);
  const { bottom } = useSafeAreaInsets();

  const cameraHeight = hp(93) - bottom;

  return (
    <CameraWrapperWithPermission>
      <Camera
        ref={cameraRef}
        style={[styles.camera, { height: cameraHeight }]}
        type={type}
      />
      <View style={[styles.videoOptions, { bottom: bottom + hp(10) }]}>
        {selectedMediaTab === "video" ? (
          <AddServiceQuickVideoOptions
            toggleCameraType={toggleCameraType}
            onStartRecording={startRecordingHandler}
            onStopRecording={stopRecordingHandler}
          />
        ) : selectedMediaTab === "image" ? (
          <AddServiceCameraOptions
            toggleCameraType={toggleCameraType}
            onCaptureImage={captureImageHandler}
          />
        ) : null}
      </View>
      {!assetUri && (
        <AddServiceVideoBottomOptions
          selectedtab={selectedMediaTab}
          setselectedtab={setSelectedMediaTab}
        />
      )}
    </CameraWrapperWithPermission>
  );
};

export default AddServiceQuickVideoImageContent;

const styles = StyleSheet.create({
  camera: {
    alignSelf: "center",
    aspectRatio: 0.73,
  },
  videoOptions: {
    alignSelf: "center",
    alignItems: "center",
    position: "absolute",
    width: wp(95),
  },
});
