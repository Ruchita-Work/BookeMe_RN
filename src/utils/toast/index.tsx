import React from "react";
import { StyleSheet } from "react-native";
import Toast, {
  BaseToast,
  ErrorToast,
  ToastConfig,
  ToastShowParams,
} from "react-native-toast-message";
import { FontFamily, FontSizes, Colors } from "@theme";
import { wp } from "@utils/responsive";

const toastConfig: ToastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={styles.successToast}
      contentContainerStyle={styles.toastContent}
      text1Style={styles.text1}
      text2Style={styles.text2}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      style={styles.errorToast}
      contentContainerStyle={styles.toastContent}
      text1Style={styles.text1}
      text2Style={styles.text2}
    />
  ),
};

const showSuccessToast = (options: ToastShowParams = {}) => {
  Toast.show({ autoHide: true, type: "success", ...options });
};

const showErrorToast = (options: ToastShowParams = {}) => {
  Toast.show({ autoHide: true, type: "error", ...options });
};

export { toastConfig, showSuccessToast, showErrorToast };

const styles = StyleSheet.create({
  text1: {
    fontSize: FontSizes.size16,
    fontFamily: FontFamily.Poppins.Medium,
    color: "black",
  },
  text2: {
    fontSize: FontSizes.size13,
    fontFamily: FontFamily.Poppins.Regular,
    color: Colors.gray700,
  },
  successToast: {
    borderLeftColor: Colors.primary,
    borderLeftWidth: wp(1.5),
  },
  toastContent: { paddingHorizontal: wp(4) },
  errorToast: {
    borderLeftColor: Colors.red400,
    borderLeftWidth: wp(1.5),
  },
});
