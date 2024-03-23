import { store } from "@redux";
import { APIAddUserRequestType } from "@api/types/userApiTypes";

const getCreateUserPayloadForIndiePro = (): APIAddUserRequestType => {
  const reduxState = store.getState();
  const proOnboarding = reduxState.onboarding.proOnboarding;
  const { socialSignin, fcmToken } = reduxState.auth;
  const indieProOnboardingData = proOnboarding.indiePro;
  const { lat, lng } =
    indieProOnboardingData.businessAddress.details.geometry.location;

  return {
    name: proOnboarding.name,
    email: socialSignin.data.profile.email,
    firebaseAuthTokenId: socialSignin.data.uid,
    firebaseId: socialSignin.data.uid,
    firebaseNotificationId: fcmToken,
    loginProvider: socialSignin.type,
    username: socialSignin.data.profile.name,
    role: "PRO",
    roleSubtype: "INDIEPRO",
    location: [lat, lng],
    phone: indieProOnboardingData.phoneNumber,
    phoneCountryCode: indieProOnboardingData.phoneNumberCountryCode,
  };
};

const getCreateIndieProPayload = (): FormData => {
  const formData = new FormData();
  const reduxState = store.getState();
  const proOnboarding = reduxState.onboarding.proOnboarding;
  const indieProOnboardingData = proOnboarding.indiePro;
  const addressDetails = indieProOnboardingData.businessAddress.details;
  const country = addressDetails.address_components.find(item =>
    item.types.includes("country"),
  )?.long_name;

  formData.append("companyName", indieProOnboardingData.companyName);
  formData.append(
    "isRentSpace",
    indieProOnboardingData.rentSpace ? "YES" : "NO",
  );

  formData.append(
    "address",
    indieProOnboardingData.businessAddress.data.description,
  );
  formData.append("country", country);
  formData.append("ein", indieProOnboardingData.ein);
  formData.append("license", {
    uri: indieProOnboardingData.license.uri,
    type: indieProOnboardingData.license.mimeType,
    name: indieProOnboardingData.license.name,
  } as any);
  formData.append("photo", {
    uri: indieProOnboardingData.image.uri,
    type: indieProOnboardingData.image.type,
    name: indieProOnboardingData.image.fileName,
  } as any);
  formData.append("phone", indieProOnboardingData.phoneNumber);
  formData.append(
    "phoneCountryCode",
    indieProOnboardingData.phoneNumberCountryCode,
  );

  if (indieProOnboardingData.rentSpace) {
    formData.append(
      "seatRent",
      indieProOnboardingData.salonDetails.seatRent.toString(),
    );
    formData.append(
      "seatRentCurrency",
      indieProOnboardingData.salonDetails.seatRentCurrency,
    );
    formData.append("businessId", indieProOnboardingData?.salonDetails?.id);
    formData.append("salonName", indieProOnboardingData.salonDetails.name);
  }

  return formData;
};

export { getCreateIndieProPayload, getCreateUserPayloadForIndiePro };
