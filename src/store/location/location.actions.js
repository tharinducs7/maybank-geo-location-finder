import {
  ADD_LOCATION_START,
  ADD_LOCATION_SUCCESS,
  ADD_LOCATION_FAILURE,
} from "./location.constants";

/************************** ADD_LOCATION **************************/
export const addLocationStart = (payload) => ({
  type: ADD_LOCATION_START,
  payload,
});

export const addLocationSuccess = (payload) => ({
  type: ADD_LOCATION_SUCCESS,
  payload,
});

export const addLocationError = (payload) => ({
  type: ADD_LOCATION_FAILURE,
  payload,
});
