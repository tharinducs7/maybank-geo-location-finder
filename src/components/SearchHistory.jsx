import React, { useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import NearMeIcon from "@mui/icons-material/NearMe";
import ListComp from "./List";

const SearchHistory = ({ historyData }) => {
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
            <ListComp historyData={historyData} />
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default SearchHistory;
