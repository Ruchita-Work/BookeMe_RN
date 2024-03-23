import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ClientOnboardingBasicInfoType,
  IOnboardingSliceInitialState,
  OnboardingInviteType,
  ProBusinessOnboardingDataType,
  ProEmployeeOnboardingDataType,
  ProIndieProOnboardingDataType,
  SetFeatureStatusPayload,
  SetSelectedPlanPayload,
  UpdateProUserTypeAndNameActionPayload,
} from "./type";
import { UserType } from "@types";
import { Contact } from "react-native-contacts";
import { ImagePickerAsset } from "expo-image-picker";

const initialState: IOnboardingSliceInitialState = {
  clientOnboarding: null,
  userType: null,
  proOnboarding: null,
  userContacts: [],
  invite: null,
};

const defaultBusinessProTypeValue: ProBusinessOnboardingDataType = {
  address: null,
  ein: "",
  features: {
    customServices: false,
    multipleAssignees: false,
  },
  image: null,
  invitedPeople: [],
  license: null,
  seatsCount: 0,
  selectedAreaOfServices: [],
  selectedPlan: "FREE",
  idDocument: null,
  proCertificate: null,
  selfie: null,
  phoneNumberCountryCode: "+1",
  phoneNumber: "",
};

const defaultIndieProTypeValue: ProIndieProOnboardingDataType = {
  ein: "",
  features: {
    customServices: false,
    multipleAssignees: false,
  },
  image: null,
  license: null,
  selectedPlan: "FREE",
  companyName: "",
  rentSpace: false,
  rentSpaceDetails: null,
  businessAddress: null,
  idDocument: null,
  proCertificate: null,
  selfie: null,
  salonDetails: null,
  phoneNumberCountryCode: "+1",
  phoneNumber: "",
};

const defaultEmployeeProTypeValue: ProEmployeeOnboardingDataType = {
  companyName: "",
  companyPhoneNumber: "",
  companyPosition: "",
  idDocument: null,
  proCertificate: null,
  selfie: null,
  companyPhoneNumberCountryCode: "",
  companyDetails: null,
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    setUserType: (state, action: PayloadAction<UserType>) => {
      state.userType = action.payload;
      // * Clear up pro onboarding data & scaffold default data
      if (action.payload === "CLIENT") {
        state.proOnboarding = null;
        state.clientOnboarding = {
          basicInfo: null,
        };
      }
      // * Clear up client onboarding data
      if (action.payload === "PRO") {
        state.clientOnboarding = null;
      }
    },
    updateClientOnboardingBasicInfo: (
      state,
      action: PayloadAction<ClientOnboardingBasicInfoType>,
    ) => {
      state.clientOnboarding.basicInfo = action.payload;
    },
    updateProUserTypeAndName: (
      state,
      action: PayloadAction<UpdateProUserTypeAndNameActionPayload>,
    ) => {
      state.proOnboarding = {
        ...action.payload,
        business:
          action.payload.proType === "business"
            ? defaultBusinessProTypeValue
            : null,
        employee:
          action.payload.proType === "employee"
            ? defaultEmployeeProTypeValue
            : null,
        indiePro:
          action.payload.proType === "indiePro"
            ? defaultIndieProTypeValue
            : null,
      };
    },
    setContacts: (state, action: PayloadAction<Contact[]>) => {
      state.userContacts = action.payload;
    },
    updateBusinessOnboardingDetails: (
      state,
      action: PayloadAction<Partial<ProBusinessOnboardingDataType>>,
    ) => {
      state.proOnboarding.business = {
        ...state.proOnboarding.business,
        ...action.payload,
      };
    },
    setSelectedPlan: (state, action: PayloadAction<SetSelectedPlanPayload>) => {
      const { plan, proType } = action.payload;

      state.proOnboarding[proType].selectedPlan = plan;
    },
    setFeatureStatus: (
      state,
      action: PayloadAction<SetFeatureStatusPayload>,
    ) => {
      const { feature, proType, value } = action.payload;
      state.proOnboarding[proType].features = {
        ...state.proOnboarding[proType].features,
        [feature]: value,
      };
    },
    updateIndieProOnboardingDetails: (
      state,
      action: PayloadAction<Partial<ProIndieProOnboardingDataType>>,
    ) => {
      state.proOnboarding.indiePro = {
        ...state.proOnboarding.indiePro,
        ...action.payload,
      };
    },
    updateEmployeeOnboardingDetails: (
      state,
      action: PayloadAction<Partial<ProEmployeeOnboardingDataType>>,
    ) => {
      state.proOnboarding.employee = {
        ...state.proOnboarding.employee,
        ...action.payload,
      };
    },
    updateIdDocument: (state, action: PayloadAction<ImagePickerAsset>) => {
      state.proOnboarding[state.proOnboarding.proType].idDocument =
        action.payload;
    },
    updateSelfie: (state, action: PayloadAction<ImagePickerAsset>) => {
      state.proOnboarding[state.proOnboarding.proType].selfie = action.payload;
    },
    updateCertificate: (state, action: PayloadAction<ImagePickerAsset>) => {
      state.proOnboarding[state.proOnboarding.proType].proCertificate =
        action.payload;
    },
    updateInviteDetails: (
      state,
      action: PayloadAction<OnboardingInviteType | null>,
    ) => {
      state.invite = action.payload;
    },
  },
});

export default onboardingSlice.reducer;
export const onboardingActions = onboardingSlice.actions;
