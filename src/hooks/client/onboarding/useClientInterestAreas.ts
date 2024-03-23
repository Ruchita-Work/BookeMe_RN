import { useEffect, useState } from "react";
import {
  APIAddUserRequestType,
  BusinessAreaItemType,
  useAddUser,
  useGetBusinessAreas,
  useUploadProfilePhoto,
} from "@api";
import useAppNavigation from "@hooks/navigation/useAppNavigation";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { authActions } from "@redux";
import { ImagePickerAsset } from "expo-image-picker";
import { showErrorToast, showSuccessToast } from "@utils/toast";

const useClientInterestAreas = () => {
  const { navigation } = useAppNavigation();
  const dispatch = useAppDispatch();
  const { socialSignin, fcmToken } = useAppSelector(state => state.auth);
  const clientOnboarding = useAppSelector(
    state => state.onboarding.clientOnboarding,
  );
  const [selectedInterests, setSelectedInterests] = useState<Set<string>>(
    new Set(),
  );
  const [isLoading, setIsLoading] = useState(false);

  const { mutateAsync: addUserMutation } = useAddUser();
  const { mutateAsync: uploadProfilePhotoMutation } = useUploadProfilePhoto();
  const { data: businessAreasQueryData } = useGetBusinessAreas();
  const [interestData, setInterestData] = useState<BusinessAreaItemType[]>([]);

  useEffect(() => {
    if (businessAreasQueryData?.data?.data) {
      setInterestData(businessAreasQueryData.data.data);
    }
  }, [businessAreasQueryData]);

  const onSelectService = (title: string) => {
    setSelectedInterests(prev => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
        return newSet;
      } else {
        return newSet.add(title);
      }
    });
  };

  const handleContinue = async () => {
    try {
      setIsLoading(true);

      const name = `${clientOnboarding.basicInfo.firstName} ${clientOnboarding.basicInfo.lastName}`;
      const addUserPayload: APIAddUserRequestType = {
        age: +clientOnboarding.basicInfo.age,
        email: socialSignin.data.profile.email,
        firebaseAuthTokenId: socialSignin.data.uid,
        firebaseId: socialSignin.data.uid,
        firebaseNotificationId: fcmToken,
        loginProvider: socialSignin.type,
        name: name,
        username: socialSignin.data.profile.name,
        role: "CLIENT",
        areasOfInterest: [...selectedInterests],
      };

      const addUserResponse = await addUserMutation(addUserPayload);
      dispatch(authActions.loginUser(addUserResponse.data?.data));

      // Upload Image to Database and store in redux if selected
      if (clientOnboarding.basicInfo.profileImage) {
        const imageUploadPayload: ImagePickerAsset =
          clientOnboarding.basicInfo.profileImage;
        await uploadProfilePhotoMutation(imageUploadPayload);
      }

      showSuccessToast({ text1: "User Registered Successfully" });
      navigation.reset({ routes: [{ name: "ClientHomeTabs" }], index: 0 });
    } catch (error) {
      showErrorToast({ text1: "Failed to register User" });
    } finally {
      setIsLoading(false);
    }
  };

  const onChangeSearchText = (searchQuery: string) => {
    const apidata = businessAreasQueryData?.data?.data || [];
    if (searchQuery) {
      setInterestData(prev =>
        prev.filter(item =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      );
    } else {
      setInterestData(apidata);
    }
  };

  return {
    handleContinue,
    onSelectService,
    selectedInterests,
    isLoading,
    interestData,
    onChangeSearchText,
  };
};

export default useClientInterestAreas;
