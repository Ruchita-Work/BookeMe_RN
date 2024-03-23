import { UserDetailsType } from "@api";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { SocialAuthTypes } from "@types";

interface IExtraSocialSigninData {
  uid: string;
}

interface IAuthSliceInitialState {
  socialSignin: {
    type: SocialAuthTypes;
    data: FirebaseAuthTypes.UserCredential["additionalUserInfo"] &
      IExtraSocialSigninData;
  } | null;
  isSocialSigninDone: boolean;
  userData: UserDetailsType | null;
  fcmToken: string | null;
  isAuthenticated: boolean;
  businessDetails: object | null;
  employeeDetails: object | null;
  isOpenModal: boolean;
}

interface IStoreSocialSigninDataActionPayload {
  data: FirebaseAuthTypes.UserCredential;
  type: SocialAuthTypes;
}

export type { IAuthSliceInitialState, IStoreSocialSigninDataActionPayload };
