import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import { CountryItem, countryCodes } from "react-native-country-codes-picker";
import * as Yup from "yup";
import { AsYouType, validatePhoneNumberLength } from "libphonenumber-js";
import {
  APIUpdateUserPayloadType,
  useGetUserMeDetails,
  useUpdateUserDetails,
  useUploadProfilePhoto,
} from "@api/index";
import BottomSheet from "@gorhom/bottom-sheet";
import { ImagePickerAsset } from "expo-image-picker";
import { getDefaultCountryCodeItem, parseApiError } from "@utils/helpers";
import { showErrorToast } from "@utils/toast";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "@hooks/redux";
import { authActions } from "@redux/features";
import { useQueryClient } from "@tanstack/react-query";
import { API_QUERY_KEYS } from "@api/query/apiQueryKeys";

const editProfileValidationSchema = Yup.object().shape({
  fullName: Yup.string().required("Please enter your full name"),
  email: Yup.string()
    .required("Please enter email")
    .email("Please enter valid email"),
  phoneNumber: Yup.string().required("Please enter your phone number"),
});

interface FormikValues {
  fullName: string;
  email: string;
  phoneNumber: string;
  image: ImagePickerAsset | null;
}

const useEditProProfileForm = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const [selectedCountry, setSelectedCountry] = useState<
    Omit<CountryItem, "name">
  >(getDefaultCountryCodeItem());
  const imagePickerSheetRef = useRef<BottomSheet>();
  const { data: userDetailsQueryResponse, isLoading: isLoadingUserDetails } =
    useGetUserMeDetails();
  const {
    mutateAsync: mutateUpdateUserDetails,
    isPending: isLoadingUpdateUser,
  } = useUpdateUserDetails();
  const {
    mutateAsync: mutateUploadProfilePhoto,
    isPending: isLoadingUploadProfilePhoto,
  } = useUploadProfilePhoto();

  const isLoading =
    isLoadingUpdateUser || isLoadingUploadProfilePhoto || isLoadingUserDetails;

  const handleSubmit = async (values: FormikValues) => {
    try {
      const payload: APIUpdateUserPayloadType = {
        name: values.fullName,
        email: values.email,
        phone: values.phoneNumber,
        phoneCountryCode: selectedCountry.dial_code,
      };
      await mutateUpdateUserDetails(payload);
      if (
        userDetailsQueryResponse?.data?.data?.photo?.streamUrl !==
        values.image.uri
      ) {
        await mutateUploadProfilePhoto(values.image);
      }
      navigation.goBack();
      queryClient.invalidateQueries({ queryKey: [API_QUERY_KEYS.USER_ME] });
    } catch (error) {
      showErrorToast({
        text1: "Failed to update user",
        text2:
          parseApiError(error) ||
          "Failed to update user! Please try again after sometime",
      });
    }
  };

  const editProfileFormik = useFormik<FormikValues>({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      image: null,
    },
    validationSchema: editProfileValidationSchema,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    if (userDetailsQueryResponse?.data?.data) {
      const userData = userDetailsQueryResponse.data.data;
      dispatch(authActions.updateUserData(userData));
      editProfileFormik.setFieldValue("fullName", userData.name);
      editProfileFormik.setFieldValue("email", userData.email);

      if (userData.phone) {
        editProfileFormik.setFieldValue("phoneNumber", userData.phone);
      }

      if (userData.phoneCountryCode) {
        const countryitem = countryCodes.findLast(
          i => i.dial_code === userData.phoneCountryCode,
        );
        setSelectedCountry(countryitem || getDefaultCountryCodeItem());
      }

      if (userData.photo?.streamUrl) {
        editProfileFormik.setFieldValue("image", {
          uri: userData.photo?.streamUrl,
        });
      }
    }
  }, [userDetailsQueryResponse]);

  const formatPhoneNumberHandler = (input: string) => {
    const formattedNumber = new AsYouType(selectedCountry.code as any).input(
      input,
    );
    return formattedNumber;
  };

  const onChangePhoneNumber = (phoneNumberText: string) => {
    const formattedNumber = formatPhoneNumberHandler(phoneNumberText);

    const numberValidLength = validatePhoneNumberLength(
      formattedNumber,
      selectedCountry.code as any,
    );

    if (numberValidLength !== undefined) {
      editProfileFormik.setFieldError(
        "phoneNumber",
        "Invalid Phone Number Length. Reason: " + numberValidLength,
      );
    }

    editProfileFormik.setFieldValue("phoneNumber", phoneNumberText);
  };

  const onPressAvatar = () => {
    imagePickerSheetRef.current?.snapToIndex(0);
  };

  const onSelectProfileImage = (results: ImagePickerAsset[]) => {
    editProfileFormik.setFieldValue("image", results[0]);
  };

  return {
    onPressAvatar,
    setSelectedCountry,
    selectedCountry,
    editProfileFormik,
    onChangePhoneNumber,
    isLoading,
    imagePickerSheetRef,
    onSelectProfileImage,
  };
};

export default useEditProProfileForm;
