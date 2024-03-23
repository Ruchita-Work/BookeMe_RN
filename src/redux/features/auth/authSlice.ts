import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type {
  IAuthSliceInitialState,
  IStoreSocialSigninDataActionPayload,
} from "./type";
import { UserDetailsType } from "@api";

const initialState: IAuthSliceInitialState = {
  isSocialSigninDone: false,
  socialSignin: null,
  userData: null,
  fcmToken: null,
  isAuthenticated: false,
  businessDetails: null,
  employeeDetails: null,
  isOpenModal: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    storeSocialSigninData: (
      state,
      action: PayloadAction<IStoreSocialSigninDataActionPayload>,
    ) => {
      const { data, type } = action.payload;
      state.isSocialSigninDone = true;
      state.socialSignin = {
        data: {
          ...data.additionalUserInfo,
          uid: data.user.uid,
        },
        type,
      };
    },
    loginUser: (state, action: PayloadAction<UserDetailsType>) => {
      state.userData = action.payload;
      state.isAuthenticated = true;
    },
    setFcmToken: (state, action: PayloadAction<string>) => {
      state.fcmToken = action.payload;
    },
    updateUserData: (
      state,
      action: PayloadAction<Partial<UserDetailsType>>,
    ) => {
      state.userData = {
        ...state.userData,
        ...action.payload,
      };
    },
    updateAuthBusinessDetails: (state, action) => {
      state.businessDetails = action.payload;
    },
    updateAuthEmployeeDetails: (state, action) => {
      state.employeeDetails = action.payload;
    },
    setIsOpenModal: (state, action) => {
      state.isOpenModal = action.payload;
    },
  },
});

export default authSlice.reducer;

export const authActions = authSlice.actions;
