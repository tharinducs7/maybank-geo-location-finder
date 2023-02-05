import React, { useState, useEffect, useRef } from "react";
import { LoadScript } from "@react-google-maps/api";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";

import MapComponent from "./components/Map";
import SearchHistory from "./components/SearchHistory";

const theme = createTheme();

const APP = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);

  const handlePlaceSelect = () => {
    if (autocomplete) {
      console.log(autocomplete.getPlace());

      const place = autocomplete.getPlace();
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();

      setSelectedPlace({
        lat,
        lng,
        address: place.formatted_address,
      });
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  };

  const onLoad = (autocomplete) => {
    console.log("autocomplete: ", autocomplete);
    setAutocomplete(autocomplete);
  };

  return (
    <ThemeProvider theme={theme}>
      <LoadScript
        googleMapsApiKey="AIzaSyB1l49cKVDRZPBhwLoiAUiNGlxQGcBGmUs"
        libraries={["places"]}
      >
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <SearchHistory />
          <MapComponent
            selectedPlace={selectedPlace}
            handlePlaceSelect={handlePlaceSelect}
            onLoad={onLoad}
          />
        </Grid>
      </LoadScript>
    </ThemeProvider>
  );
};

export default APP;
