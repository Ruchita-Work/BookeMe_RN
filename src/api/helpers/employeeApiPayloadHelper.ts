import { store } from "@redux";
import {
  APIAddUserRequestType,
  APICreateEmployeePayloadType,
} from "@api/types/userApiTypes";

const getCreateUserPayloadForEmployee = (): APIAddUserRequestType => {
  const reduxState = store.getState();
  const proOnboarding = reduxState.onboarding.proOnboarding;
  const { socialSignin, fcmToken } = reduxState.auth;
  const employeeOnboardingData = proOnboarding.employee;

  return {
    name: proOnboarding.name,
    email: socialSignin.data.profile.email,
    firebaseAuthTokenId: socialSignin.data.uid,
    firebaseId: socialSignin.data.uid,
    firebaseNotificationId: fcmToken,
    loginProvider: socialSignin.type,
    username: socialSignin.data.profile.name,
    role: "PRO",
    roleSubtype: "EMPLOYEE",
    phone: employeeOnboardingData.companyPhoneNumber,
    phoneCountryCode: employeeOnboardingData.companyPhoneNumberCountryCode,
  };
};

const getCreateEmployeePayload = (): APICreateEmployeePayloadType => {
  const reduxState = store.getState();
  const proOnboarding = reduxState.onboarding.proOnboarding;
  const {
    companyName,
    companyDetails,
    companyPhoneNumber,
    companyPhoneNumberCountryCode,
    companyPosition,
  } = proOnboarding.employee;

  return {
    companyName,
    companyPhone: companyPhoneNumber,
    companyPhoneCountryCode: companyPhoneNumberCountryCode,
    companyPosition,
    businessId: companyDetails.id,
  };
};

export { getCreateUserPayloadForEmployee, getCreateEmployeePayload };
