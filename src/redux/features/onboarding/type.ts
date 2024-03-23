import { InviteDetailsType } from "@api";
import { SearchBusinessDetailsType } from "@api/types/searchApiTypes";
import { PlanType, ProUserType, UserType } from "@types";
import { DocumentPickerAsset } from "expo-document-picker";
import { ImagePickerAsset } from "expo-image-picker";
import { Contact } from "react-native-contacts";
import {
  GooglePlaceData,
  GooglePlaceDetail,
} from "react-native-google-places-autocomplete";

interface ClientOnboardingBasicInfoType {
  profileImage: ImagePickerAsset;
  firstName: string;
  lastName: string;
  age: string;
  location: string;
}

interface InvitedTeamMember {
  firstName: string;
  lastName: string;
  seatRent: number;
  inviteType: "PRO" | "EMPLOYEE";
  email: string;
  phoneNumber: string;
}

interface ProBusinessOnboardingDataType {
  selectedAreaOfServices: string[];
  seatsCount: number;
  address: { data: GooglePlaceData; details: GooglePlaceDetail } | null;
  ein: string;
  license: DocumentPickerAsset;
  invitedPeople: InvitedTeamMember[];
  selectedPlan: PlanType;
  features: {
    multipleAssignees: boolean;
    customServices: boolean;
  };
  image: ImagePickerAsset;
  idDocument: ImagePickerAsset;
  selfie: ImagePickerAsset;
  proCertificate: ImagePickerAsset;
  phoneNumber: string;
  phoneNumberCountryCode: string;
  seatRent: number;
}

interface ProEmployeeOnboardingDataType {
  companyPhoneNumber: string;
  companyName: string;
  companyPosition: string;
  idDocument: ImagePickerAsset;
  selfie: ImagePickerAsset;
  proCertificate: ImagePickerAsset;
  companyPhoneNumberCountryCode: string;
  features?: {
    multipleAssignees: boolean;
    customServices: boolean;
  };
  selectedPlan?: PlanType;
  companyDetails: SearchBusinessDetailsType | null;
}

interface ProIndieProOnboardingDataType {
  image: ImagePickerAsset;
  ein: string;
  companyName: string;
  license: DocumentPickerAsset;
  selectedPlan: PlanType;
  features: {
    multipleAssignees: boolean;
    customServices: boolean;
  };
  rentSpace: boolean;
  rentSpaceDetails: {
    salonName: string;
    amount: number;
  } | null;
  businessAddress: { data: GooglePlaceData; details: GooglePlaceDetail } | null;
  idDocument: ImagePickerAsset;
  selfie: ImagePickerAsset;
  proCertificate: ImagePickerAsset;
  salonDetails: SearchBusinessDetailsType | null;
  phoneNumber: string;
  phoneNumberCountryCode: string;
}

interface ProOnboardingStateType {
  name: string;
  proType: ProUserType;
  business: ProBusinessOnboardingDataType | null;
  employee: ProEmployeeOnboardingDataType | null;
  indiePro: ProIndieProOnboardingDataType | null;
}

// Action Payloads

interface UpdateProUserTypeAndNameActionPayload {
  proType: ProUserType;
  name: string;
}

interface OnboardingInviteType {
  id: string;
  details: InviteDetailsType;
}

interface IOnboardingSliceInitialState {
  userType: UserType | null;
  clientOnboarding: {
    basicInfo: ClientOnboardingBasicInfoType | null;
  };
  proOnboarding: ProOnboardingStateType | null;
  userContacts: Contact[];
  invite: OnboardingInviteType | null;
}

type OnboardingFeaturesType = "multipleAssignees" | "customServices";

interface SetSelectedPlanPayload {
  proType: ProUserType;
  plan: PlanType;
}

interface SetFeatureStatusPayload {
  proType: ProUserType;
  feature: OnboardingFeaturesType;
  value: boolean;
}

export {
  ClientOnboardingBasicInfoType,
  IOnboardingSliceInitialState,
  UpdateProUserTypeAndNameActionPayload,
  ProBusinessOnboardingDataType,
  ProEmployeeOnboardingDataType,
  ProIndieProOnboardingDataType,
  SetSelectedPlanPayload,
  SetFeatureStatusPayload,
  OnboardingFeaturesType,
  InvitedTeamMember,
  OnboardingInviteType,
};
