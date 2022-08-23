import Axios from 'axios';

import config from './../config';

export const axios = Axios.create({
  baseURL: config.api.baseURL,
});

// axios.interceptors.request.use(authRequestInterceptor);
// axios.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   (error) => {
//     const message = error.response?.data?.message || error.message;
//     useNotificationStore.getState().addNotification({
//       type: 'error',
//       title: 'Error',
//       message,
//     });

//     return Promise.reject(error);
//   }
// );
