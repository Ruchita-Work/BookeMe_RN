// store
import store, { persistor } from "@redux/store/store";

// types
import type { AppDispatch, RootState } from "@redux/store/store";
import {
  IAuthSliceInitialState,
  IStoreSocialSigninDataActionPayload,
} from "@redux/features/auth/type";
import {
  ClientOnboardingBasicInfoType,
  IOnboardingSliceInitialState,
  UpdateProUserTypeAndNameActionPayload,
  InvitedTeamMember,
} from "@redux/features/onboarding/type";

// features
import {
  authSlice,
  authActions,
  onboardingActions,
  onboardingSlice,
} from "@redux/features";

// exports
export {
  store,
  persistor,
  authSlice,
  authActions,
  ClientOnboardingBasicInfoType,
  IAuthSliceInitialState,
  IOnboardingSliceInitialState,
  IStoreSocialSigninDataActionPayload,
  onboardingActions,
  onboardingSlice,
  UpdateProUserTypeAndNameActionPayload,
  InvitedTeamMember,
};

export type { AppDispatch, RootState };
