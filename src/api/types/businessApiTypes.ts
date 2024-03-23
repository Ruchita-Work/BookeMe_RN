import { DocumentPickerAsset } from "expo-document-picker";
import { ImagePickerAsset } from "expo-image-picker";

interface BusinessAreaItemType {
  title: string;
  imageUrl: string;
}

interface APIBusinessAreaResponseType {
  data: BusinessAreaItemType[] | null;
}

interface APICreateBusinessPayloadType {
  name: string;
  numOfSeats: number;
  address: string;
  country: string;
  ein: string;
  location: number[];
  areaOfBusiness: string;
  photo: ImagePickerAsset;
  license: DocumentPickerAsset;
}

interface AddressItemType {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  formatted: string;
}

interface BusinessDetailsType {
  id: string;
  numOfSeats: number;
  address: AddressItemType[];
  location: number[];
  createdTime: string;
}

interface BusinessUserDetailsType {
  username: string;
  businesses: string[];
  updatedTime: string;
}

interface APICreateBusinessResponseType {
  data: {
    business: BusinessDetailsType | null;
    user: BusinessUserDetailsType | null;
    message: string;
  } | null;
  details: {
    body: object;
  };
  generatedAt: string;
}

export {
  BusinessAreaItemType,
  APIBusinessAreaResponseType,
  APICreateBusinessPayloadType,
  APICreateBusinessResponseType,
  BusinessUserDetailsType,
  BusinessDetailsType,
  AddressItemType,
};
