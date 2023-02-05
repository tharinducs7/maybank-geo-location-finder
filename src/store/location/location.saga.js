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
import { toast } from "react-toastify";

function* addLocationStart({ type, payload }) {
  try {
    console.log(payload, "selected");
    yield put(addLocationSuccess(payload));
    toast.success(`${payload.name} added to history`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  } catch (err) {
    yield put(addLocationError(err));
    toast.error(err, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
}

function* removeLocationStart({ type, payload }) {
  try {
    console.log(payload, "id remove");
    yield put(removeLocationSuccess(payload));
    toast.info(`location removed from history`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  } catch (err) {
    yield put(removeLocationError(err));
    toast.error(err, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
}

function* locationSaga() {
  yield* [
    takeEvery(ADD_LOCATION_START, addLocationStart),
    takeEvery(REMOVE_LOCATION_START, removeLocationStart),
  ];
}

export default locationSaga;
