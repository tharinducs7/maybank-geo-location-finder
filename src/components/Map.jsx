import * as React from "react";
import Grid from "@mui/material/Grid";
import { Map, Marker } from "pigeon-maps";

export default function MapComponent() {
  return (
    <Grid item xs={12} sm={4} md={9}>
      <Map defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
        <Marker width={50} anchor={[50.879, 4.6997]} />
      </Map>
    </Grid>
  );
}
