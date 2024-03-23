import { RoleSubType, SocialAuthTypes, UserType } from "@types";
import { APIPhotoResponseType } from "./common";
import { ImagePickerAsset } from "expo-image-picker";

// Add User (Firebase)
interface APIAddUserRequestType {
  username: string;
  name: string;
  email: string;
  age?: number;
  loginProvider: SocialAuthTypes;
  firebaseAuthTokenId: string;
  firebaseNotificationId: string;
  firebaseId: string;
  role: UserType;
  areasOfInterest?: string[];
  phone?: string;
  phoneCountryCode?: string;
  roleSubtype?: RoleSubType;
  location?: number[];
}

interface UserDetailsType {
  username: string;
  photo: APIPhotoResponseType | null;
  id: string;
  email: string;
  name: string;
  phone: string;
  role: string;
  address: string;
  location: number[];
  isBusinessInvited: boolean;
  businessInvite: any;
  indieProBusinessId: any;
  createdTime: string;
  isActive: boolean;
  isVerified: boolean;
  loginProvider: SocialAuthTypes;
  indieProId: string;
  phoneCountryCode: string | null;
  updatedTime: string;
  isPaidAccount: boolean;
  subscriptionName: string;
  businesses: string[] | null;
  employeeId: string[] | null;
  firebaseId: string | null;
  fullPhoneNumber: string | null;
}

interface APIAddUserResponseType {
  data: UserDetailsType;
  details: {
    body: {};
  };
  generatedAt: string;
}

interface APIUploadProfilePhotoResponseType {
  data: {
    username: string;
    email: string;
    resourceUrl: string;
    message: string;
  };
  details: {
    body: {};
  };
  generatedAt: string;
}

interface APICheckUserExistenceRequestType {
  email: string;
}

interface APICheckUserExistenceResponseType {
  data: UserDetailsType;
  details: {
    body: {};
  };
}

interface APIUploadVerificationDocsPayloadType {
  id: ImagePickerAsset;
  selfie: ImagePickerAsset;
  certificate: ImagePickerAsset;
}

interface APIGetUserMeDetailsResponseType {
  data: UserDetailsType;
}

interface APICreateEmployeePayloadType {}

type APIUpdateUserPayloadType = Partial<{
  email: string;
  phone: string;
  phoneCountryCode: string;
  name: string;
  username: string;
  password: string;
  age: string;
  location: number[];
  isPaidAccount: boolean;
  subscriptionName: string;
  isActive: boolean;
}>;

interface APIUpdateUserResponseType {
  data: {
    id: string;
    username: string;
    email: string;
    phone: string;
    name: string;
    updatedTime: string;
  };
  details: {
    body: object;
  };
  generatedAt: string;
}

export {
  APIAddUserRequestType,
  APIAddUserResponseType,
  APIUploadProfilePhotoResponseType,
  APICheckUserExistenceResponseType,
  APICheckUserExistenceRequestType,
  APIUploadVerificationDocsPayloadType,
  APICreateEmployeePayloadType,
  UserDetailsType,
  APIGetUserMeDetailsResponseType,
  APIUpdateUserPayloadType,
  APIUpdateUserResponseType,
};
