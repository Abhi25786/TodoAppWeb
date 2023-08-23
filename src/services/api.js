import axios from "axios";
import { getItem } from "../utils/utils";
export async function getHeaders() {
    let userData = await getItem('userData');
    if (!!userData) {
      return {
        authorization: `bearer ${userData?.token}`,
      };
    }
    return {};
}
  

  export async function apiReq(
    endPoint,
    data,
    method,
    headers,
    requestOptions = {},
  ) {
  
    const source = axios.CancelToken.source();
  
    return new Promise(async (res, rej) => {
      const getTokenHeader = await getHeaders();
      console.log(getTokenHeader, 'endPoint++++++');
  
      headers = {
        ...getTokenHeader,
        ...headers,
        // cancelToken:source.token
      };
  
      console.log(headers,'SCASFDVSDFVSDFVSDFS');
  
      if (method === 'get' || method === 'delete') {
        data = {
          ...requestOptions,
          ...data,
          headers,
        };
      }
  
      console.log('header sending--->', headers,data,endPoint);
      console.log('data sending ---->', data);
      //
      axios[method](endPoint, data, { headers })
        .then((result) => {
          console.log("core result", result)
          const { data } = result;
  
          if (data.status === false) {
            return rej(data);
          }
  
          return res(data);
        })
        .catch((error) => {
          console.log(error?.response, '<===error in utils');
          if (error && error?.response && error?.response.status === 401) {
            // sessionHandler(error.response.data.message);
            return rej(error);
          }
          if (error && error.response && error.response.data) {
            if (!error.response.data.error) {
              return rej({
                ...error.response.data,
                error: error.response.data.error || 'Network Error',
              });
            }
            return rej(error.response.data);
          } else {
            return rej({ error: 'Network Error', message: 'Network Error' });
          }
          return rej(error);
        });
    });
  }

export function apiPost(endPoint, data, headers = {}) {
    console.log(endPoint, data, headers = {},'endPoint, data, headers = {}');
      return apiReq(endPoint, data, 'post', headers);
    }
    
    export function apiDelete(endPoint, data, headers = {}) {
      return apiReq(endPoint, data, 'delete', headers);
    }
    
    export function apiGet(endPoint, data, headers = {}, requestOptions) {
      return apiReq(endPoint, data, 'get', headers, requestOptions);
    }
    
    export function apiPut(endPoint, data, headers = {}) {
      return apiReq(endPoint, data, 'put', headers);
    }