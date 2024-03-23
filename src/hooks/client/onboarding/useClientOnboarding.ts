import useAppNavigation from "@hooks/navigation/useAppNavigation";
import { ImagePickerAsset } from "expo-image-picker";
import { useFormik } from "formik";
import { useRef } from "react";
import * as Yup from "yup";
import BottomSheet from "@gorhom/bottom-sheet";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { onboardingActions } from "@redux";

const clientOnboardingValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter first name"),
  lastName: Yup.string().required("Please enter last name"),
  age: Yup.number()
    .typeError("Age must be a number")
    .positive("Age must be greater than zero")
    .required("Please enter age")
    .max(100, "Age must be less than 101"),
  location: Yup.string().required("Please enter location"),
});

interface IFormikValues {
  profileImage: ImagePickerAsset | null;
  firstName: string;
  lastName: string;
  age: string;
  location: string;
}

const formInitialValues: IFormikValues = {
  profileImage: null,
  firstName: "",
  lastName: "",
  age: "",
  location: "",
};

const useClientOnboarding = () => {
  const dispatch = useAppDispatch();
  const { navigation } = useAppNavigation();
  const imagePickerSheetRef = useRef<BottomSheet>(null);
  const { data } = useAppSelector(state => state.auth.socialSignin);

  const handleFormSubmit = (values: IFormikValues) => {
    dispatch(onboardingActions.updateClientOnboardingBasicInfo(values));
    navigation.navigate("ClientInterestAreas");
  };

  const form = useFormik<IFormikValues>({
    initialValues: {
      ...formInitialValues,
      firstName: data?.profile?.name || "",
    },
    validationSchema: clientOnboardingValidationSchema,
    onSubmit: handleFormSubmit,
  });

  const handleProfileImagePick = async (response: ImagePickerAsset[]) => {
    form.setFieldValue("profileImage", response[0]);
  };

  const onPressProfileImageSelect = () => {
    imagePickerSheetRef.current?.snapToIndex(0);
  };

  return {
    form,
    handleProfileImagePick,
    imagePickerSheetRef,
    onPressProfileImageSelect,
  };
};

export default useClientOnboarding;
