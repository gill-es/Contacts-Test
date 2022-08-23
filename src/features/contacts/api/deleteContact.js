import { axios } from "../../../lib/axios";

export const deleteContact = (id) => {
  return axios.delete(`/contacts/${id}`);
};
