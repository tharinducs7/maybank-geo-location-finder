import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addLocationStart,
  removeLocationStart,
} from "./store/location/location.actions";

// import Google Api
import { LoadScript } from "@react-google-maps/api";

// import MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";

// import components
import MapComponent from "./components/Map";
import SearchHistory from "./components/SearchHistory";
import MoreInfo from "./components/MoreInfo";

// goole api libraries
import { LIBRARIES } from "./constants";

import uuid from "react-uuid";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme();

const APP = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [mapDridWidth, setMapDridWidth] = useState(9);
  const [showMoreInfo, setMoreInfo] = useState(false);

  const dispatch = useDispatch();

  const { location } = useSelector((state) => state);
  const { locationData } = location;

  const handlePlaceSelect = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();

      const selectedGeoLocation = {
        id: uuid(),
        lat,
        lng,
        address: place.formatted_address,
        name: place.name,
        photos: place.photos,
      };
      setSelectedPlace(selectedGeoLocation);
      dispatch(addLocationStart(selectedGeoLocation));
      setMoreInfo(true);
      setMapDridWidth(6);
    } else {
      console.log("Autocomplete is not loaded yet!")
    }
  };

  const onLoad = (autocomplete) => {
    console.log("autocomplete: ", autocomplete);
    setAutocomplete(autocomplete);
  };

  const previousLocation = (location) => {
    setSelectedPlace(location);
    setMoreInfo(true);
    setMapDridWidth(6);
  };

  const removeLocation = (id) => {
    dispatch(removeLocationStart(id));
    setMoreInfo(false);
    setMapDridWidth(9);
  };

  return (
    <ThemeProvider theme={theme}>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        libraries={LIBRARIES}
      >
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <SearchHistory
            historyData={locationData}
            previousLocation={previousLocation}
            removeLocation={removeLocation}
          />
          <MapComponent
            selectedPlace={selectedPlace}
            handlePlaceSelect={handlePlaceSelect}
            onLoad={onLoad}
            mapDridWidth={mapDridWidth}
          />
          {showMoreInfo && <MoreInfo selectedPlace={selectedPlace} />}
        </Grid>
      </LoadScript>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default APP;
