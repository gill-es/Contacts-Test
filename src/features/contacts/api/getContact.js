import { axios } from "../../../lib/axios";

export const getContact = ({ id }) => {
  return axios.get(`/contacts/${id}`);
};
