import BottomSheet from "@gorhom/bottom-sheet";
import useAppNavigation from "@hooks/navigation/useAppNavigation";
import { useAppDispatch } from "@hooks/redux";
import { onboardingActions } from "@redux/features";
import { ProIndieProOnboardingDataType } from "@redux/features/onboarding/type";
import { getDefaultCountryCodeItem } from "@utils/helpers";
import { lauchDocumentPicker, launchImagePicker } from "@utils/mediaPicker";
import { DocumentPickerAsset } from "expo-document-picker";
import { ImagePickerAsset } from "expo-image-picker";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import { CountryItem } from "react-native-country-codes-picker";
import {
  GooglePlaceData,
  GooglePlaceDetail,
} from "react-native-google-places-autocomplete";
import * as Yup from "yup";

interface IFormikValues {
  ein: string;
  companyName: string;
  businessAddress: { data: GooglePlaceData; details: GooglePlaceDetail } | null;
  rentASpace: "Yes" | "No";
  businessLicense: DocumentPickerAsset | null;
  phoneNumber: string;
  image: ImagePickerAsset | null;
}

const validationSchema = Yup.object().shape({
  ein: Yup.string().required("Please enter EIN"),
  companyName: Yup.string().required("Please enter company name"),
  businessAddress: Yup.object().required("Please select business address"),
  rentASpace: Yup.string().required("Please select rent space preference"),
  businessLicense: Yup.object().required("Please select business license"),
  phoneNumber: Yup.string().required("Please enter phone number"),
});

const initialValues: IFormikValues = {
  ein: "",
  companyName: "",
  businessAddress: null,
  rentASpace: null,
  businessLicense: null,
  phoneNumber: "",
  image: null,
};

const useCreateIndieProBusiness = () => {
  const { navigation } = useAppNavigation();
  const dispatch = useAppDispatch();
  const selectLocationSheetRef = useRef<BottomSheet>(null);
  const [selectedCountry, setSelectedCountry] = useState<
    Omit<CountryItem, "name">
  >(getDefaultCountryCodeItem());

  const handleSubmit = (e: IFormikValues) => {
    const payload: Partial<ProIndieProOnboardingDataType> = {
      companyName: e.companyName,
      ein: e.ein,
      businessAddress: e.businessAddress,
      rentSpace: !!(e.rentASpace === "Yes"),
      license: e.businessLicense,
      phoneNumber: e.phoneNumber,
      phoneNumberCountryCode: selectedCountry.dial_code,
      image: e.image,
    };

    dispatch(onboardingActions.updateIndieProOnboardingDetails(payload));
    if (e.rentASpace === "Yes") {
      navigation.navigate("IndieProCompanyDetails");
    } else {
      navigation.navigate("IdVerification");
    }
  };

  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const handleOnpressBusinessAddress = () => {
    selectLocationSheetRef.current.snapToIndex(0);
  };

  const handleSelectDocument = async () => {
    try {
      const response = await lauchDocumentPicker();
      if (response) {
        form.setFieldValue("businessLicense", response[0]);
      }
    } catch (error) {}
  };

  const handleSelectImage = async () => {
    try {
      const response = await launchImagePicker();
      if (response) {
        form.setFieldValue("image", response[0]);
      }
    } catch (error) {
      console.log("handleSelectImage ====>", error);
    }
  };

  return {
    form,
    handleOnpressBusinessAddress,
    selectLocationSheetRef,
    handleSelectDocument,
    selectedCountry,
    setSelectedCountry,
    handleSelectImage,
  };
};

export default useCreateIndieProBusiness;
