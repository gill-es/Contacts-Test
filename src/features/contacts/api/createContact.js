import { axios } from "../../../lib/axios";

export const createContact = (params) => {
  return axios.post(`/contacts`, {
    requestId: "$datatype.uuid",
    items: "$mockData",
    count: "$count",
    ...params,
  });
};
