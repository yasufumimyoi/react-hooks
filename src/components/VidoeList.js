import React, { useContext } from "react";
import VideoContext from "../context/video-contex";
import { Grid } from "@material-ui/core";

const VideoList = () => {
  const { videos } = useContext(VideoContext);
  return (
    <Grid item xs={12} sm={3}>
      {videos.map((video) => {
        return (
          <div>
            <img src={video.snippet.thumbnails.medium.url} />
            <p>{video.snippet.title}</p>
          </div>
        );
      })}
    </Grid>
  );
};

export default VideoList;
