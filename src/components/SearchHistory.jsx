import React from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NearMeIcon from "@mui/icons-material/NearMe";

// Import component
import LocationList from "./LocationList";

const SearchHistory = ({ historyData, previousLocation }) => {
  return (
    <Grid item xs={12} sm={8} md={3} component={Paper} elevation={20} square>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#009688" }}>
          <NearMeIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          LocateMe
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <Grid container>
            <LocationList
              historyData={historyData}
              previousLocation={previousLocation}
            />
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default SearchHistory;
