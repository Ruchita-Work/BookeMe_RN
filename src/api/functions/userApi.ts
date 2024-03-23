import axiosClient from "@api/client/axiosClient";
import { useMutation, useQuery } from "@tanstack/react-query";
import { API_URLS } from "@api/constants/apiUrls";
import {
  APIAddUserRequestType,
  APIAddUserResponseType,
  APICheckUserExistenceRequestType,
  APICheckUserExistenceResponseType,
  APICreateEmployeePayloadType,
  APIGetUserMeDetailsResponseType,
  APIUpdateUserPayloadType,
  APIUpdateUserResponseType,
  APIUploadProfilePhotoResponseType,
  APIUploadVerificationDocsPayloadType,
} from "@api/types/userApiTypes";
import { AxiosHeaders } from "axios";
import { ImagePickerAsset } from "expo-image-picker";
import { getIdVerificationDocPayload } from "@api/helpers/businessApiPayloadHelper";
import { API_QUERY_KEYS } from "@api/query/apiQueryKeys";
import { useAppDispatch } from "@hooks/redux";
import { authActions } from "@redux/features";

// Add User (Firebase)
const mutateAddUser = (payload: APIAddUserRequestType) => {
  const headers = new AxiosHeaders();
  headers.setContentType("application/json");

  return axiosClient.post<APIAddUserResponseType>(API_URLS.ADD_USER, payload, {
    headers,
  });
};

const useAddUser = () => {
  return useMutation({ mutationFn: mutateAddUser });
};

// Upload Profile Photo
const mutateUploadProfilePhoto = (payload: ImagePickerAsset) => {
  const headers = new AxiosHeaders();
  headers.setContentType("multipart/form-data");

  const formData = new FormData();
  formData.append("avatar", {
    uri: payload.uri,
    type: payload.type,
    name: payload.fileName,
  } as any);

  return axiosClient.post<APIUploadProfilePhotoResponseType>(
    API_URLS.UPLOAD_PROFILE_IMAGE,
    formData,
    { headers },
  );
};

const useUploadProfilePhoto = () => {
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: mutateUploadProfilePhoto,
    onSuccess: response => {
      dispatch(
        authActions.updateUserData({
          photo: { streamUrl: response.data?.data?.resourceUrl },
        }),
      );
    },
  });
};

// Check User Existence
const mutateCheckUserExistence = (
  payload: APICheckUserExistenceRequestType,
) => {
  return axiosClient.post<APICheckUserExistenceResponseType>(
    API_URLS.CHECK_USER,
    payload,
  );
};

const useCheckUserExistence = () => {
  return useMutation({ mutationFn: mutateCheckUserExistence });
};

// Upload Verification Documents
const mutateUploadVerificationDocs = (
  payload: APIUploadVerificationDocsPayloadType,
) => {
  const headers = new AxiosHeaders();
  headers.setContentType("multipart/form-data");
  const formData = getIdVerificationDocPayload(payload);
  return axiosClient.post(API_URLS.UPLOAD_IDENTIFICATION, formData, {
    headers,
  });
};

const useUploadVerificationDocs = () => {
  return useMutation({ mutationFn: mutateUploadVerificationDocs });
};

// Create Indie Pro
const mutateCreateIndiePro = (payload: FormData) => {
  return axiosClient.post(API_URLS.CREATE_INDIE_PRO, payload);
};

const useCreateIndiePro = () => {
  return useMutation({ mutationFn: mutateCreateIndiePro });
};

// Create Employee
const mutateCreateEmployee = (payload: APICreateEmployeePayloadType) => {
  return axiosClient.post(API_URLS.CREATE_EMPLOYEE, payload);
};

const useCreateEmployee = () => {
  return useMutation({ mutationFn: mutateCreateEmployee });
};

const getUserMeDetails = () => {
  return axiosClient.get<APIGetUserMeDetailsResponseType>(API_URLS.USER_ME);
};

const useGetUserMeDetails = () => {
  return useQuery({
    queryKey: [API_QUERY_KEYS.USER_ME],
    queryFn: getUserMeDetails,
  });
};

const updateUserDetails = (payload: APIUpdateUserPayloadType) => {
  return axiosClient.put<APIUpdateUserResponseType>(API_URLS.UPDATE_USER, {
    data: payload,
  });
};

const useUpdateUserDetails = () => {
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: updateUserDetails,
    onSuccess: response => {
      dispatch(authActions.updateUserData(response.data?.data));
    },
  });
};

// Exports
export {
  useAddUser,
  useUploadProfilePhoto,
  useCheckUserExistence,
  useUploadVerificationDocs,
  useCreateIndiePro,
  useCreateEmployee,
  useGetUserMeDetails,
  useUpdateUserDetails,
};
