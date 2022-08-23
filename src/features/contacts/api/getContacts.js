import { axios } from "../../../lib/axios";

export const getContacts = () => {
  return axios.get("/contacts");
};
