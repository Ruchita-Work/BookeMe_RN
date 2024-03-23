import axios from "axios";
import { API_BASE_URL } from "@api/constants/apiUrls";
import { getFirebaseAuthToken } from "@utils/firebase";

const axiosClient = axios.create({ baseURL: API_BASE_URL });

axiosClient.interceptors.request.use(async config => {
  const firebaseJwtToken = await getFirebaseAuthToken();
  if (firebaseJwtToken) {
    config.headers.setAuthorization(`Bearer ${firebaseJwtToken}`);
  }
  return config;
});

export default axiosClient;
