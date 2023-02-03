import {
  GET_CURRENT_LOCATION_START,
  GET_CURRENT_LOCATION_SUCCESS,
  GET_CURRENT_LOCATION_FAILURE,
} from "./location.constants";

const INITIAL_STATE = {
  isLoading: false,
  getCurrentLocationData: {},
  getCurrentLocationError: "",
};

export default function locations(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_CURRENT_LOCATION_START:
      return setGetCurrentLocationStart(state);

    case GET_CURRENT_LOCATION_SUCCESS:
      return setGetCurrentLocationSuccess(state, payload);

    case GET_CURRENT_LOCATION_FAILURE:
      return setGetCurrentLocationError(state, payload);

    default:
      return state;
  }
}

/**
 ************** GET Locations **************
 */
const setGetCurrentLocationStart = (state) => ({
  ...state,
  getCurrentLocationData: {},
  isLoading: true,
  getCurrentLocationError: null,
});

const setGetCurrentLocationSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  getCurrentLocationData: payload,
  getCurrentLocationError: null,
});

const setGetCurrentLocationError = (state, payload) => ({
  ...state,
  isLoading: false,
  getCurrentLocationData: {},
  getCurrentLocationError: payload,
});
