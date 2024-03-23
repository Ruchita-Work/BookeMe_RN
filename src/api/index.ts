import { API_BASE_URL, API_URLS } from "./constants/apiUrls";
import axiosClient from "./client/axiosClient";
import {
  useAddUser,
  useCheckUserExistence,
  useUploadProfilePhoto,
  useCreateEmployee,
  useCreateIndiePro,
  useUploadVerificationDocs,
  useGetUserMeDetails,
  useUpdateUserDetails,
} from "./functions/userApi";
import {
  useGetBusinessAreas,
  useCreateBusinessAPI,
} from "./functions/businessApi";
import {
  useInviteMember,
  useGetInviteDetailsById,
  useAcceptInvite,
} from "./functions/inviteApis";
import { useSearchUsers } from "./functions/searchApi";

import {
  APIAddUserRequestType,
  APIAddUserResponseType,
  APIUploadProfilePhotoResponseType,
  APICheckUserExistenceRequestType,
  APICheckUserExistenceResponseType,
  APIUploadVerificationDocsPayloadType,
  APICreateEmployeePayloadType,
  UserDetailsType,
  APIUpdateUserPayloadType,
} from "./types/userApiTypes";
import {
  APIBusinessAreaResponseType,
  BusinessAreaItemType,
  APICreateBusinessPayloadType,
  APICreateBusinessResponseType,
  AddressItemType,
  BusinessDetailsType,
  BusinessUserDetailsType,
} from "./types/businessApiTypes";
import {
  APIInviteMemberRequestType,
  APIInviteMemberResponseType,
  APIGetInviteDetailsByIdPayloadType,
  APIAcceptInvitePayloadType,
  APIInviteDetailsResponseType,
  InviteDetailsType,
} from "./types/inviteApiTypes";
import {
  APISearchUsersPayloadType,
  SearchUserType,
  APISearchUsersResponseType,
  SearchBusinessDetailsType,
} from "./types/searchApiTypes";

import {
  getCreateBusinessPayload,
  getCreateUserPayloadForBusiness,
  getIdVerificationDocPayload,
  getInviteMemberPayload,
} from "./helpers/businessApiPayloadHelper";
import {
  getCreateEmployeePayload,
  getCreateUserPayloadForEmployee,
} from "./helpers/employeeApiPayloadHelper";
import {
  getCreateIndieProPayload,
  getCreateUserPayloadForIndiePro,
} from "./helpers/indieProApiPayloadHelpers";

export {
  // constants
  API_BASE_URL,
  API_URLS,

  // client
  axiosClient,

  // hooks
  useAddUser,
  useUploadProfilePhoto,
  useCheckUserExistence,
  useGetBusinessAreas,
  useCreateBusinessAPI,
  useCreateEmployee,
  useCreateIndiePro,
  useUploadVerificationDocs,
  useInviteMember,
  useGetInviteDetailsById,
  useAcceptInvite,
  useSearchUsers,
  useGetUserMeDetails,
  useUpdateUserDetails,

  // types
  APIAddUserRequestType,
  APIAddUserResponseType,
  APIUploadProfilePhotoResponseType,
  APICheckUserExistenceRequestType,
  APICheckUserExistenceResponseType,
  APIBusinessAreaResponseType,
  BusinessAreaItemType,
  APIUploadVerificationDocsPayloadType,
  APICreateBusinessPayloadType,
  APICreateEmployeePayloadType,
  APIInviteMemberRequestType,
  APIInviteMemberResponseType,
  APIGetInviteDetailsByIdPayloadType,
  UserDetailsType,
  APIAcceptInvitePayloadType,
  APIInviteDetailsResponseType,
  InviteDetailsType,
  APICreateBusinessResponseType,
  AddressItemType,
  BusinessDetailsType,
  BusinessUserDetailsType,
  APISearchUsersPayloadType,
  SearchUserType,
  APISearchUsersResponseType,
  SearchBusinessDetailsType,
  APIUpdateUserPayloadType,

  // helpers
  getCreateBusinessPayload,
  getCreateUserPayloadForBusiness,
  getIdVerificationDocPayload,
  getInviteMemberPayload,
  getCreateEmployeePayload,
  getCreateUserPayloadForEmployee,
  getCreateIndieProPayload,
  getCreateUserPayloadForIndiePro,
};
