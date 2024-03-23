import { KeyboardType, Platform } from "react-native";

const normalizeFormikError = (error?: any, isTouched?: any): string => {
  if (error && isTouched) {
    return error.toString();
  } else {
    return "";
  }
};

const commonFormikInputProps = (
  key: string,
  values: any,
  handleChange: any,
  handleBlur: any,
  touched: any,
  errors: any,
) => {
  return {
    value: values[key],
    onChangeText: handleChange(key),
    onBlur: handleBlur(key),
    error: normalizeFormikError(errors[key], touched[key]),
  };
};

const numericKeyboardType: KeyboardType = Platform.select({
  ios: "number-pad",
  android: "numeric",
});

export { normalizeFormikError, commonFormikInputProps, numericKeyboardType };
