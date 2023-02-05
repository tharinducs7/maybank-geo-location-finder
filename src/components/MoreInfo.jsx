import * as React from "react";
import Grid from "@mui/material/Grid";
import InfoCard from "./InfoCard";
import ImagesCard from "./ImagesCard";

/**
 * More Info Card 
 * @returns 
 */
export default function MoreInfo({ selectedPlace }) {
  return (
    <Grid item xs={12} sm={4} md={3}>
      <div>
        <InfoCard selectedPlace={selectedPlace} />
        <ImagesCard photos={selectedPlace?.photos} name={selectedPlace?.name} />
      </div>
    </Grid>
  );
}
