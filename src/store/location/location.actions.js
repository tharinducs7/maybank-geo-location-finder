import {
  GET_CURRENT_LOCATION_START,
  GET_CURRENT_LOCATION_SUCCESS,
  GET_CURRENT_LOCATION_FAILURE,
} from "./location.constants";

/************************** GET_CURRENT_LOCATION **************************/
export const getCurrentLocationStart = (payload) => ({
  type: GET_CURRENT_LOCATION_START,
  payload,
});

export const getCurrentLocationSuccess = (payload) => ({
  type: GET_CURRENT_LOCATION_SUCCESS,
  payload,
});

export const getCurrentLocationError = (payload) => ({
  type: GET_CURRENT_LOCATION_FAILURE,
  payload,
});
