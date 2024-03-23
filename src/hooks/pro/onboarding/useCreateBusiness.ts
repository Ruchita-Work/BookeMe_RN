import { useRef, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { DocumentPickerAsset } from "expo-document-picker";
import BottomSheet from "@gorhom/bottom-sheet";
import useAppNavigation from "@hooks/navigation/useAppNavigation";
import { getAllContacts, getDefaultCountryCodeItem } from "@utils/helpers";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { onboardingActions } from "@redux/features";
import {
  GooglePlaceData,
  GooglePlaceDetail,
} from "react-native-google-places-autocomplete";
import { ImagePickerAsset } from "expo-image-picker";
import { ProBusinessOnboardingDataType } from "@redux/features/onboarding/type";
import { lauchDocumentPicker } from "@utils/mediaPicker";
import { CountryItem } from "react-native-country-codes-picker";

const createBusinessSchema = Yup.object().shape({
  businessAddress: Yup.object().required("Please select business address"),
  ein: Yup.string().required("Please enter business EIN"),
  businessLicense: Yup.object().required("Please select business license"),
  phoneNumber: Yup.string().required("Please enter business phone number"),
  seatRent: Yup.string()
    .required("Please enter seat rent")
    .matches(/^-?\d+(\.\d+)?$/, "Seat Rent must be a Number"),
});

interface IFormikValues {
  businessAddress: { data: GooglePlaceData; details: GooglePlaceDetail } | null;
  ein: string;
  businessLicense: DocumentPickerAsset | null;
  logo: ImagePickerAsset | null;
  phoneNumber: string;
  seatRent: string;
}

const formikInitialValues: IFormikValues = {
  businessAddress: null,
  businessLicense: null,
  ein: "",
  logo: null,
  phoneNumber: "",
  seatRent: "",
};

const useCreateBusiness = () => {
  const { navigation } = useAppNavigation();
  const imagePickerSheetRef = useRef<BottomSheet>(null);
  const selectLocationSheetRef = useRef<BottomSheet>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<
    Omit<CountryItem, "name">
  >(getDefaultCountryCodeItem());
  const dispatch = useAppDispatch();
  const userContacts = useAppSelector(state => state.onboarding.userContacts);
  const proOnboardingData = useAppSelector(
    state => state.onboarding.proOnboarding,
  );

  const onSubmit = (e: IFormikValues) => {
    const payload: Partial<ProBusinessOnboardingDataType> = {
      ein: e.ein,
      address: e.businessAddress,
      image: e.logo,
      license: e.businessLicense,
      seatsCount: 3,
      phoneNumber: e.phoneNumber,
      phoneNumberCountryCode: selectedCountry.dial_code,
      seatRent: +e.seatRent,
    };
    dispatch(onboardingActions.updateBusinessOnboardingDetails(payload));
    navigation.navigate("IdVerification");
  };

  const createBusinessFormik = useFormik({
    validationSchema: createBusinessSchema,
    initialValues: formikInitialValues,
    onSubmit,
  });

  const onInviteTeamMembers = async () => {
    if (!userContacts || !userContacts.length) {
      setIsLoading(true);
      const contacts = await getAllContacts();

      if (!contacts) {
        navigation.navigate("InviteTeamMembers");
        return;
      }
      dispatch(onboardingActions.setContacts(contacts ?? []));
      setIsLoading(false);
    }
    navigation.navigate("AddBusinessTeams");
  };

  const handleSelectMedia = (media: ImagePickerAsset[]) => {
    createBusinessFormik.setFieldValue("logo", media[0]);
  };

  const onPressAvatar = () => {
    imagePickerSheetRef.current?.snapToIndex(0);
  };

  const handleSelectDocument = async () => {
    try {
      const response = await lauchDocumentPicker();
      if (response) {
        createBusinessFormik.setFieldValue("businessLicense", response[0]);
      }
    } catch (error) {}
  };

  const handleOnpressBusinessAddress = () => {
    selectLocationSheetRef.current.snapToIndex(0);
  };

  return {
    handleSelectMedia,
    onPressAvatar,
    imagePickerSheetRef,
    onInviteTeamMembers,
    createBusinessFormik,
    handleSelectDocument,
    selectLocationSheetRef,
    handleOnpressBusinessAddress,
    isLoading,
    proOnboardingData,
    selectedCountry,
    setSelectedCountry,
  };
};

export default useCreateBusiness;
