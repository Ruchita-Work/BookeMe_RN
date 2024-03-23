import BottomSheet from "@gorhom/bottom-sheet";
import { Camera, CameraType, VideoQuality } from "expo-camera";
import { useRef, useState } from "react";

export type TAddServiceSelectedMediaTabType = "video" | "image" | "template";

const useAddService = () => {
  const [type, setType] = useState(CameraType.back);
  const [selectedMediaTab, setSelectedMediaTab] =
    useState<TAddServiceSelectedMediaTabType>("video");
  const [assetUri, setAssetUri] = useState<string | null>(null);

  const cameraRef = useRef<Camera>(null);
  const serviceDetailsSheetRef = useRef<BottomSheet>(null);

  const toggleCameraType = () => {
    setType(current =>
      current === CameraType.back ? CameraType.front : CameraType.back,
    );
  };

  const startRecordingHandler = async () => {
    const { uri } = await cameraRef.current?.recordAsync({
      quality: VideoQuality["1080p"],
    });

    setAssetUri(uri);
  };

  const stopRecordingHandler = () => {
    cameraRef.current?.stopRecording();
  };

  const captureImageHandler = async () => {
    const capturedImage = await cameraRef.current.takePictureAsync({
      quality: 0.6,
    });
    setAssetUri(capturedImage.uri);
  };

  const cancelMediaSelectionHandler = () => {
    setType(CameraType.back);
    setSelectedMediaTab("video");
    setAssetUri("");
  };

  return {
    cameraRef,
    toggleCameraType,
    startRecordingHandler,
    stopRecordingHandler,
    type,
    selectedMediaTab,
    setSelectedMediaTab,
    captureImageHandler,
    assetUri,
    cancelMediaSelectionHandler,
    serviceDetailsSheetRef,
  };
};

export default useAddService;
