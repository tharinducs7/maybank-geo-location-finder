import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const InfoCard = ({ selectedPlace }) => {
  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader title={selectedPlace?.name} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b> Address :</b> {selectedPlace?.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b> Longitude :</b> {selectedPlace?.lng}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b> Latitude :</b> {selectedPlace?.lat}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
