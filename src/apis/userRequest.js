// const response = await axios.get(
//   "https://664f4d11fafad45dfae33698.mockapi.io/api/v1/users"
// );

import axios from "axios";

export const getDataUser = () => {
  const API = axios.create({
    baseURL: "https://664f4d11fafad45dfae33698.mockapi.io",
  });
  return API.get("/api/v1/users");
};
