import React from "react";
import { Grid } from "@material-ui/core";

const VideoList = ({ video }) => {
  return (
    <Grid item xs={12} sm={3}>
      <img src={video.snippet.thumbnails.medium.url} />
      <p>{video.snippet.title}</p>
    </Grid>
  );
};

export default VideoList;
