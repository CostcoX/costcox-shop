import "regenerator-runtime/runtime";
import axios from "axios";
import { from } from "rxjs";

export function apiReq(endPoint, data, method, headers, requestOptions = {}) {
  headers = {
    ...headers,
  };

  const baseURL = window && window.location.origin;

  if (method === "get" || method === "delete") {
    data = {
      ...requestOptions,
      ...data,
      headers,
    };
  }

  return from(
    axios[method](`${baseURL}${endPoint}`, data, { headers })
      .then((result) => {
        const { data } = result;

        if (data.status === false) {
          return Promise.reject(data);
        }

        return data;
      })
      .catch((error) => {
        console.log(error);
        console.log(error && error.response, "the error response");
        if (error && error.response && error.response.status === 401) {
          // Handle 401 error if needed
        }
        if (error && error.response && error.response.data) {
          if (!error.response.data.message) {
            return Promise.reject({
              ...error.response.data,
              msg: error.response.data.message || "Network Error",
            });
          }
          return Promise.reject(error.response.data);
        } else {
          return Promise.reject({
            message: "Network Error",
            msg: "Network Error",
          });
        }
      })
  );
}

export function post(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, "post", headers);
}

export function apiDelete(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, "delete", headers);
}

export function get(endPoint, data, headers = {}, requestOptions) {
  return apiReq(endPoint, data, "get", headers, requestOptions);
}

export function put(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, "put", headers);
}
