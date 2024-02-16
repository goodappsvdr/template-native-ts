import axios from "axios";

const BASE_URL = "https://goodappscrm.online/EOSAPI/api";

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
