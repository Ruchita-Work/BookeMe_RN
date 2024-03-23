import { PermissionsAndroid } from "react-native";
import Contacts from "react-native-contacts";
import { isAndroid, isIOS } from "@utils/responsive";
import { AxiosError } from "axios";
import { CountryItem } from "react-native-country-codes-picker";

const getAllContacts = async (): Promise<Contacts.Contact[] | null> => {
  try {
    if (isAndroid) {
      const permissionResponse = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: "Contacts",
          message:
            "This app would like to access contacts to invite team members.",
          buttonPositive: "Please accept",
        },
      );
      return await Contacts.getAll();
    }

    if (isIOS) {
      const permissionResponse = await Contacts.requestPermission();
      return await Contacts.getAll();
    }
  } catch (error) {
    return null;
  }
};

const parseApiError = (error: AxiosError<{ message: string }>) => {
  if (typeof error.response?.data === "string") {
    return error.response.data;
  } else {
    return error.response?.data?.message;
  }
};

const getDefaultCountryCodeItem = (): Omit<CountryItem, "name"> => {
  return {
    dial_code: "+1",
    code: "US",
    flag: "🇺🇸",
  };
};

export { getAllContacts, parseApiError, getDefaultCountryCodeItem };
