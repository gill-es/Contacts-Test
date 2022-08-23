import { axios } from "../../../lib/axios";

export const updateContact = (id, params) => {
  console.log(id, params)
  return axios.put(`/contacts/${id}`, {
    requestId: "$datatype.uuid",
    items: "$mockData",
    count: "$count",
    ...params,
  });
};
