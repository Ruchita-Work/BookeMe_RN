import { AxiosResponse } from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import axiosClient from "@api/client/axiosClient";
import { API_URLS } from "@api/constants/apiUrls";
import { API_QUERY_KEYS } from "@api/query/apiQueryKeys";
import {
  APIBusinessAreaResponseType,
  APICreateBusinessResponseType,
} from "@api/types/businessApiTypes";

// Create Business
const mutateCreateBusiness = (payload: FormData) => {
  return axiosClient.post<APICreateBusinessResponseType>(
    API_URLS.CREATE_BUSINESS,
    payload,
  );
};

const useCreateBusinessAPI = () => {
  return useMutation({ mutationFn: mutateCreateBusiness });
};

const getBusinessAreas = () => {
  return axiosClient.get(API_URLS.BUSINESS_AREAS);
};

const useGetBusinessAreas = () => {
  return useQuery<AxiosResponse<APIBusinessAreaResponseType>>({
    queryKey: [API_QUERY_KEYS.BUSINESS_AREAS],
    queryFn: getBusinessAreas,
  });
};

export { useGetBusinessAreas, useCreateBusinessAPI };
