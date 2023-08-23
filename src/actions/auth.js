import apiEndpoints from "../constants/apiEndpoints";
import { saveUserData } from "../reducers/auth";
import { apiPost } from "../services/api";
import store from "../store/configureStore";
import { setItem } from "../utils/utils";

const dispatch = store.dispatch;
export const userDate = data => {
  console.log(data,'datadata');
    dispatch(saveUserData(data));
    setItem('userData', data);
  };
  
  // ------------------ login Api ---------
export const userLogin = (data, header) => {
    return apiPost(apiEndpoints.LOGIN, data, header);
  };
  