import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { GoogleMap, Autocomplete, Marker } from "@react-google-maps/api";
import TextField from "@mui/material/TextField";

const mapContainerStyle = {
  height: "100%",
  width: "100%",
};

// Initialized Map Center
const center = {
  lat: 3.139003,
  lng: 101.686855,
};

/**
 * Map Component
 *
 * @returns
 */

const MapComponent = ({
  selectedPlace,
  handlePlaceSelect,
  onLoad,
  mapDridWidth,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const placeChange = () => {
    handlePlaceSelect();
    setSearchValue("");
  };

  return (
    <Grid item xs={12} sm={4} md={mapDridWidth}>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={13}
          center={selectedPlace ? selectedPlace : center}
        >
          {selectedPlace && (
            <Marker
              position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }}
            />
          )}
          <Autocomplete onLoad={onLoad} onPlaceChanged={placeChange}>
            <TextField
              margin="dense"
              required
              id="search"
              name="search"
              value={searchValue}
              onChange={(event) => {
                setSearchValue(event.target.value);
              }}
              autoFocus
              style={{
                marginTop: "60px",
                backgroundColor: "snow",
                marginLeft: "10px",
              }}
            />
          </Autocomplete>
        </GoogleMap>
      </div>
    </Grid>
  );
};

export default MapComponent;
