import { combineReducers } from "redux";
import location from "./location/location.reducers";

const reducers = {
  location: location,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
