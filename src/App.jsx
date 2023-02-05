import React, { useState, useEffect, useRef } from "react";
import { LoadScript } from "@react-google-maps/api";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import MapComponent from "./components/Map";
import SearchHistory from "./components/SearchHistory";
import { useSelector, useDispatch } from "react-redux";
import { addLocationStart } from "./store/location/location.actions";
import MoreInfo from "./components/MoreInfo";

const theme = createTheme();

const APP = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [md, setMd] = useState(9);
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
        lat,
        lng,
        address: place.formatted_address,
        name: place.name,
        photos: place.photos,
      };

      setSelectedPlace(selectedGeoLocation);
      dispatch(addLocationStart(selectedGeoLocation));
      setMoreInfo(true);
      setMd(6);
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  };

  const onLoad = (autocomplete) => {
    console.log("autocomplete: ", autocomplete);
    setAutocomplete(autocomplete);
  };

  const previousLocation = (location) => {
    setSelectedPlace(location);
  };

  return (
    <ThemeProvider theme={theme}>
      <LoadScript
        googleMapsApiKey="AIzaSyB1l49cKVDRZPBhwLoiAUiNGlxQGcBGmUs"
        libraries={["places"]}
      >
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <SearchHistory
            historyData={locationData}
            previousLocation={previousLocation}
          />
          <MapComponent
            selectedPlace={selectedPlace}
            handlePlaceSelect={handlePlaceSelect}
            onLoad={onLoad}
            md={md}
          />
          {showMoreInfo && <MoreInfo selectedPlace={selectedPlace} />}
        </Grid>
      </LoadScript>
    </ThemeProvider>
  );
};

export default APP;
