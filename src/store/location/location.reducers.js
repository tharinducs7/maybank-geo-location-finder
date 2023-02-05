import {
  ADD_LOCATION_START,
  ADD_LOCATION_SUCCESS,
  ADD_LOCATION_FAILURE,
} from "./location.constants";

const INITIAL_STATE = {
  isLoading: false,
  locationData: [],
  getAddLocationError: "",
};

export default function locations(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case ADD_LOCATION_START:
      return setGetAddLocationStart(state);

    case ADD_LOCATION_SUCCESS:
      return setGetAddLocationSuccess(state, payload);

    case ADD_LOCATION_FAILURE:
      return setGetAddLocationError(state, payload);

    default:
      return state;
  }
}

/**
 ************** GET Locations **************
 */
const setGetAddLocationStart = (state) => ({
  ...state,
  isLoading: true,
  getAddLocationError: null,
});

const setGetAddLocationSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  locationData: [payload, ...state.locationData],
  getAddLocationError: null,
});

const setGetAddLocationError = (state, payload) => ({
  ...state,
  isLoading: false,
  getAddLocationError: payload,
});
