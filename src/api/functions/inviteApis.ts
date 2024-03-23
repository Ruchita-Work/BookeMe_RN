import axiosClient from "@api/client/axiosClient";
import { useMutation } from "@tanstack/react-query";
import { API_URLS } from "@api/constants/apiUrls";
import {
  APIAcceptInvitePayloadType,
  APIGetInviteDetailsByIdPayloadType,
  APIInviteDetailsResponseType,
  APIInviteMemberRequestType,
  APIInviteMemberResponseType,
} from "@api/types/inviteApiTypes";

const inviteMember = (payload: APIInviteMemberRequestType) => {
  return axiosClient.post<APIInviteMemberResponseType>(
    API_URLS.SEND_INVITE,
    payload,
  );
};

const useInviteMember = () => {
  return useMutation({ mutationFn: inviteMember });
};

const getInviteDetailsById = (payload: APIGetInviteDetailsByIdPayloadType) => {
  return axiosClient.post<APIInviteDetailsResponseType>(
    API_URLS.GET_INVITE_BY_ID,
    payload,
  );
};

const useGetInviteDetailsById = () => {
  return useMutation({ mutationFn: getInviteDetailsById });
};

const acceptInvite = (payload: APIAcceptInvitePayloadType) => {
  return axiosClient.get(API_URLS.ACCEPT_INVITE + `/${payload.id}`);
};

const useAcceptInvite = () => {
  return useMutation({ mutationFn: acceptInvite });
};

export { useInviteMember, useGetInviteDetailsById, useAcceptInvite };
