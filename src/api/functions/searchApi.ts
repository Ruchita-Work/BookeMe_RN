import { useMutation } from "@tanstack/react-query";
import axiosClient from "@api/client/axiosClient";
import { API_URLS } from "@api/constants/apiUrls";
import {
  APISearchUsersPayloadType,
  APISearchUsersResponseType,
} from "@api/types/searchApiTypes";

const searchUsers = (payload: APISearchUsersPayloadType) => {
  const bodyParams = {
    query: payload.query || " ", // ! Don't remove empty string with space otherwise api will not work
    type: payload.type.toString(),
  };
  return axiosClient.post<APISearchUsersResponseType>(
    API_URLS.SEARCH,
    bodyParams,
  );
};

const useSearchUsers = () => {
  return useMutation({ mutationFn: searchUsers });
};

export { useSearchUsers };
