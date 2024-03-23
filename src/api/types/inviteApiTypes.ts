import { APIPhotoResponseType } from "./common";

interface APIInviteMemberRequestType {
  firstName: string;
  lastName?: string;
  accountType: "PRO" | "EMPLOYEE";
  seatRent?: number;
  phoneNumber: string;
  inviter: string;
  inviteType: "PRO" | "EMPLOYEE";
  email: string;
  seatRentCurrency: string;
  businessId: string;
}

interface APIInviteMemberResponseType {
  data: {
    inviteId: string;
  };
  details: {
    body: object;
  };
  generatedAt: string;
}

interface APIGetInviteDetailsByIdPayloadType {
  id: string;
}

interface APIAcceptInvitePayloadType {
  id: string;
}

interface InviteDetailsType {
  inviteType: "PRO" | "EMPLOYEE";
  seatRent?: number;
  seatRentCurrency: string;
  phoneNumber: string;
  sender: string;
  businessPhoto: APIPhotoResponseType;
  businessName: string;
  accepted: boolean;
  businessId: string;
}

interface APIInviteDetailsResponseType {
  data: InviteDetailsType | null;
  details: {
    body: object;
  };
  generatedAt: string;
}

export {
  APIInviteMemberRequestType,
  APIInviteMemberResponseType,
  APIGetInviteDetailsByIdPayloadType,
  APIAcceptInvitePayloadType,
  InviteDetailsType,
  APIInviteDetailsResponseType,
};
