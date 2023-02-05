import React, { useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import { GoogleMap, Autocomplete, Marker } from "@react-google-maps/api";
import TextField from "@mui/material/TextField";

const mapContainerStyle = {
  height: "100%",
  width: "100%",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const MapComponent = ({ selectedPlace, handlePlaceSelect, onLoad }) => {
  return (
    <Grid item xs={12} sm={4} md={9}>
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
          <Autocomplete onLoad={onLoad} onPlaceChanged={handlePlaceSelect}>
            <TextField
              margin="dense"
              required
              id="search"
              name="search"
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
