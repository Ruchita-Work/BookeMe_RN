import { Alert, Linking } from "react-native";
import { DocumentPickerOptions, getDocumentAsync } from "expo-document-picker";
import {
  ImagePickerOptions,
  launchImageLibraryAsync,
  MediaTypeOptions,
  launchCameraAsync,
  getCameraPermissionsAsync,
  requestCameraPermissionsAsync,
  getMediaLibraryPermissionsAsync,
  requestMediaLibraryPermissionsAsync,
} from "expo-image-picker";

const MAX_ALLOWED_FILE_SIZE = 20000000; // 20 MB

const handleCameraPermissions = async () => {
  const { canAskAgain, granted } = await getCameraPermissionsAsync();
  if (granted) {
    return true;
  }

  if (canAskAgain && !granted) {
    const permissionResponse = await requestCameraPermissionsAsync();
    return permissionResponse.granted;
  } else {
    Alert.alert(
      "Permission Denied",
      "Camera Permission is not allowed! Please manually enable it from settings",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Open Settings",
          isPreferred: true,
          onPress: () => Linking.openSettings(),
        },
      ],
    );
    return false;
  }
};

const handleGalleryPermissions = async () => {
  const { canAskAgain, granted } = await getMediaLibraryPermissionsAsync();
  if (granted) {
    return true;
  }

  if (canAskAgain && !granted) {
    const permissionResponse = await requestMediaLibraryPermissionsAsync();
    return permissionResponse.granted;
  } else {
    Alert.alert(
      "Permission Denied",
      "Gallery Permission is not allowed! Please manually enable it from settings",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Open Settings",
          isPreferred: true,
          onPress: () => Linking.openSettings(),
        },
      ],
    );
    return false;
  }
};

const launchImagePicker = async (options?: ImagePickerOptions) => {
  try {
    const allowed = await handleGalleryPermissions();
    if (!allowed) {
      return null;
    }
    const response = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      quality: 0.85,
      ...(options || {}),
    });

    if (!response.assets.length || response.canceled) {
      return null;
    }

    const overSizedMediaSelected = response.assets.find(
      item => item.fileSize > MAX_ALLOWED_FILE_SIZE,
    );

    if (overSizedMediaSelected) {
      Alert.alert(
        "File size exceeded!",
        "Selected file size should not be greater than 20 MB",
      );
      return null;
    }

    return response.assets;
  } catch (error) {
    return null;
  }
};

const launchCamera = async (options?: ImagePickerOptions) => {
  try {
    const allowed = await handleCameraPermissions();
    if (!allowed) {
      return null;
    }
    const response = await launchCameraAsync({
      mediaTypes: MediaTypeOptions.Images,
      quality: 0.85,
      ...(options || {}),
    });
    if (!response.assets.length || response.canceled) {
      return null;
    }

    const overSizedMediaSelected = response.assets.find(
      item => item.fileSize > MAX_ALLOWED_FILE_SIZE,
    );
    if (overSizedMediaSelected) {
      Alert.alert(
        "File size exceeded!",
        "Selected file size should not be greater than 20 MB",
      );
      return null;
    }

    return response.assets;
  } catch (error) {
    return null;
  }
};

const lauchDocumentPicker = async (options?: DocumentPickerOptions) => {
  const response = await getDocumentAsync({
    type: [
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/pdf",
    ],
    ...(options || {}),
  });

  if (!response.assets.length || response.canceled) {
    return null;
  }

  const overSizedMediaSelected = response.assets?.find(
    item => item.size > MAX_ALLOWED_FILE_SIZE,
  );
  if (overSizedMediaSelected) {
    Alert.alert(
      "File size exceeded!",
      "Selected file size should not be greater than 20 MB",
    );
    return null;
  }

  return response.assets;
};

export { launchImagePicker, launchCamera, lauchDocumentPicker };
