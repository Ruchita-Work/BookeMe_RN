import { AddressItemType } from "./businessApiTypes";
import { APIPhotoResponseType } from "./common";

type SearchUserType = "all" | "business" | "product" | "service" | "user";

interface APISearchUsersPayloadType {
  query: string;
  type: SearchUserType[];
}

interface SearchBusinessDetailsType {
  id: string;
  name: string;
  createdTime: string;
  teamMembers: string[];
  indieProEmployees: string[];
  numOfSeats: number;
  address: AddressItemType[];
  location: [number, number];
  photo: APIPhotoResponseType;
  areaOfBusiness: string[];
  seatRent: number;
  seatRentCurrency: string;
}

interface APISearchUsersResponseType {
  data: {
    users?: any[];
    businesses?: SearchBusinessDetailsType[];
    products?: any[];
    services?: any[];
    employee?: any[];
    indiePro?: any[];
  };
  details: {
    body: object;
  };
  generatedAt: string;
}

export {
  APISearchUsersPayloadType,
  SearchUserType,
  SearchBusinessDetailsType,
  APISearchUsersResponseType,
};
