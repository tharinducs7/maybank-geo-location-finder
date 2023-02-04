import React, { useState, useEffect, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Map from "./components/Map";
//import { Input, TextField } from "@material-ui/core";
//import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentLocationStart } from "./store/location/location.actions";
import Autocomplete, { usePlacesWidget } from "react-google-autocomplete";

const theme = createTheme();

export default function GeoLocation() {
  const dispatch = useDispatch();
  const [country, setCountry] = useState("us");
  const { location } = useSelector((state) => state);
  console.log(location, "lol");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const featchOnLoad = async () => {
    let role = "all";
    dispatch(getCurrentLocationStart());
  };

  useEffect(() => {
    // featchOnLoad();
  }, []);

  const { ref: materialRef } = usePlacesWidget({
    apiKey: "AIzaSyB1l49cKVDRZPBhwLoiAUiNGlxQGcBGmUs",
    onPlaceSelected: (place) => console.log(place, "test"),
  });

  // AIzaSyB1l49cKVDRZPBhwLoiAUiNGlxQGcBGmUs
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={3}
          component={Paper}
          elevation={20}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                inputRef={materialRef}
                autoFocus
              />
              {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button> */}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

        <Map />
      </Grid>
    </ThemeProvider>
  );
}
