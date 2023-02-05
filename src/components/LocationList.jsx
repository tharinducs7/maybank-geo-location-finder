import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const LocationList = ({ historyData, previousLocation }) => {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        overflow: "auto",
        maxHeight: 500,
      }}
    >
      {historyData.map((value, key) => {
        const labelId = `map-${key}`;

        return (
          <ListItem
            key={key}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <DeleteForeverIcon />
              </IconButton>
            }
          >
            <ListItemButton
              role={undefined}
              dense
              onClick={() => previousLocation(value)}
            >
              <ListItemIcon>
                <LocationOnIcon sx={{ color: "#e91e63" }} />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value.name}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default LocationList;
