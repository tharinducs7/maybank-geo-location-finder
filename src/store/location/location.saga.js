import { put, takeEvery } from "redux-saga/effects";
import {
  addLocationError,
  addLocationSuccess,
  removeLocationError,
  removeLocationSuccess,
} from "./location.actions";

import {
  ADD_LOCATION_START,
  REMOVE_LOCATION_START,
} from "./location.constants";

function* addLocationStart({ type, payload }) {
  try {
    console.log(payload, "selected");
    yield put(addLocationSuccess(payload));
  } catch (err) {
    yield put(addLocationError(err));
  }
}

function* removeLocationStart({ type, payload }) {
  try {
    console.log(payload, "id remove");
    yield put(removeLocationSuccess(payload));
  } catch (err) {
    yield put(removeLocationError(err));
  }
}

function* locationSaga() {
  yield* [
    takeEvery(ADD_LOCATION_START, addLocationStart),
    takeEvery(REMOVE_LOCATION_START, removeLocationStart),
  ];
}

export default locationSaga;
