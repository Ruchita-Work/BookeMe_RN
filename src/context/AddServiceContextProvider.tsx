import React, { FC, PropsWithChildren, createContext } from "react";
import { useAddService } from "@hooks";

type IAddServiceContextValue = ReturnType<typeof useAddService>;

export const AddServiceContext = createContext({} as IAddServiceContextValue);

const AddServiceContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const {
    cameraRef,
    startRecordingHandler,
    stopRecordingHandler,
    toggleCameraType,
    type,
    selectedMediaTab,
    setSelectedMediaTab,
    captureImageHandler,
    assetUri,
    cancelMediaSelectionHandler,
    serviceDetailsSheetRef,
  } = useAddService();

  const ctxValue: IAddServiceContextValue = {
    cameraRef,
    startRecordingHandler,
    stopRecordingHandler,
    toggleCameraType,
    type,
    selectedMediaTab,
    setSelectedMediaTab,
    captureImageHandler,
    assetUri,
    cancelMediaSelectionHandler,
    serviceDetailsSheetRef,
  };

  return (
    <AddServiceContext.Provider value={ctxValue}>
      {children}
    </AddServiceContext.Provider>
  );
};

export default AddServiceContextProvider;
