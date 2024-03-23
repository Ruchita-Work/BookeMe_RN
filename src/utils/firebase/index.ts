import { PermissionsAndroid, Platform } from "react-native";
import messaging from "@react-native-firebase/messaging";
import auth from "@react-native-firebase/auth";

const getFCMToken = async () => {
  try {
    if (Platform.OS === "ios") {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        const token = await messaging().getToken();
        return token;
      }
    }

    if (Platform.OS === "android") {
      const respone = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      if (respone === "granted") {
        return await messaging().getToken();
      }
    }
  } catch (error) {
    return null;
  }
};

const getFirebaseAuthToken = async (): Promise<string | null> => {
  try {
    const token = await auth().currentUser.getIdToken();
    return token;
  } catch (error) {
    return null;
  }
};

export { getFCMToken, getFirebaseAuthToken };
