import * as React from "react";
import Grid from "@mui/material/Grid";



export default function MapComponent() {

  return (
    <Grid item xs={12} sm={4} md={9}>
      <div style={{ height: "100vh", width: "100%" }}>
        {/* <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB1l49cKVDRZPBhwLoiAUiNGlxQGcBGmUs" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact> */}
      </div>
    </Grid>
  );
}
