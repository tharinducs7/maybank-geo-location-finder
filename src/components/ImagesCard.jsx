import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function ImagesCard({ photos }) {
  return (
    <ImageList sx={{ height: 550 }} cols={3} rowHeight={164}>
      {photos?.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.getUrl()}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.getUrl()}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
