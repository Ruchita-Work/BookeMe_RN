import { InvitedTeamMember, store } from "@redux";
import {
  APIAddUserRequestType,
  APIUploadVerificationDocsPayloadType,
} from "@api/types/userApiTypes";
import { APIInviteMemberRequestType } from "@api/types/inviteApiTypes";

const getCreateUserPayloadForBusiness = (): APIAddUserRequestType => {
  const reduxState = store.getState();
  const proOnboarding = reduxState.onboarding.proOnboarding;
  const { socialSignin, fcmToken } = reduxState.auth;
  const businessOnboardingData = proOnboarding.business;
  const { lat, lng } = businessOnboardingData.address.details.geometry.location;

  return {
    name: proOnboarding.name,
    areasOfInterest: businessOnboardingData.selectedAreaOfServices,
    email: socialSignin.data.profile.email,
    firebaseAuthTokenId: socialSignin.data.uid,
    firebaseId: socialSignin.data.uid,
    firebaseNotificationId: fcmToken,
    loginProvider: socialSignin.type,
    username: socialSignin.data.profile.name,
    role: "PRO",
    roleSubtype: "BUSINESS",
    location: [lat, lng],
    phone: businessOnboardingData.phoneNumber,
    phoneCountryCode: businessOnboardingData.phoneNumberCountryCode,
  };
};

const getCreateBusinessPayload = () => {
  const formData = new FormData();
  const reduxState = store.getState();
  const proOnboarding = reduxState.onboarding.proOnboarding;
  const businessOnboardingData = proOnboarding.business;
  const addressDetails = businessOnboardingData.address.details;
  const { lat, lng } = addressDetails.geometry.location;
  const country = addressDetails.address_components.find(item =>
    item.types.includes("country"),
  )?.long_name;

  formData.append("address", businessOnboardingData.address.data.description);
  formData.append(
    "areaOfBusiness",
    businessOnboardingData.selectedAreaOfServices.toString(),
  );
  formData.append("country", country);
  formData.append("ein", businessOnboardingData.ein);
  formData.append("name", proOnboarding.name);
  formData.append("numOfSeats", businessOnboardingData.seatsCount.toString());
  formData.append("location", [lat, lng].toString());
  formData.append("license", {
    uri: businessOnboardingData.license.uri,
    type: businessOnboardingData.license.mimeType,
    name: businessOnboardingData.license.name,
  } as any);
  formData.append("photo", {
    uri: businessOnboardingData.image.uri,
    type: businessOnboardingData.image.type,
    name: businessOnboardingData.image.fileName,
  } as any);
  formData.append("phone", businessOnboardingData.phoneNumber);
  formData.append(
    "phoneCountryCode",
    businessOnboardingData.phoneNumberCountryCode,
  );
  formData.append("seatRent", businessOnboardingData.seatRent.toString());
  formData.append("seatRentCurrency", "USD");

  return formData;
};

const getIdVerificationDocPayload = (
  params: APIUploadVerificationDocsPayloadType,
): FormData => {
  const formData = new FormData();
  formData.append("id", {
    uri: params.id.uri,
    type: params.id.type,
    name: params.id.fileName,
  } as any);
  formData.append("selfie", {
    uri: params.selfie.uri,
    type: params.selfie.type,
    name: params.selfie.fileName,
  } as any);
  formData.append("certificate", {
    uri: params.certificate.uri,
    type: params.certificate.type,
    name: params.certificate.fileName,
  } as any);

  return formData;
};

const getInviteMemberPayload = (
  params: InvitedTeamMember,
  businessId: string,
) => {
  const name = store.getState().onboarding.proOnboarding?.name;

  const payload: APIInviteMemberRequestType = {
    accountType: params.inviteType || "EMPLOYEE",
    firstName: params.firstName,
    inviter: name || "",
    inviteType: params.inviteType || "EMPLOYEE",
    phoneNumber: params.phoneNumber,
    lastName: params.lastName,
    seatRent: +params.seatRent,
    email: params.email,
    seatRentCurrency: "USD",
    businessId,
  };

  return payload;
};

export {
  getCreateUserPayloadForBusiness,
  getCreateBusinessPayload,
  getIdVerificationDocPayload,
  getInviteMemberPayload,
};
