import "regenerator-runtime/runtime";
import axios from "axios";

export async function apiReq(
  endPoint,
  data,
  method,
  headers,
  requestOptions = {}
) {
  return new Promise(async (res, rej) => {
    // Note: Should implement later once the access token and refresh token logic is finalized
    // const getTokenHeader = await getHeaders();
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

    axios[method](`${baseURL}${endPoint}`, data, { headers })
      .then((result) => {
        const { data } = result;

        if (data.status === false) {
          return rej(data);
        }

        return res(data);
      })
      .catch((error) => {
        console.log(error);
        console.log(error && error.response, "the error respne");
        if (error && error.response && error.response.status === 401) {
        }
        if (error && error.response && error.response.data) {
          if (!error.response.data.message) {
            return rej({
              ...error.response.data,
              msg: error.response.data.message || "Network Error",
            });
          }
          return rej(error.response.data);
        } else {
          return rej({ message: "Network Error", msg: "Network Error" });
        }
      });
  });
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
