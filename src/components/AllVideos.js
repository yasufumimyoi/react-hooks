import React, { useContext } from "react";
import { VideoContext } from "../context/video-context";
import { Grid } from "@material-ui/core";
import { AllVideoItems } from "./AllVideoItems";
import { videosUseStyles } from "../style/pages";

const AllVideos = () => {
  const { MVideo, RVideo, RRVideo } = useContext(VideoContext);
  const classes = videosUseStyles();
  return (
    <div>
      <Grid container>
        <Grid item sm={2} />
        <Grid item sm={8}>
          <Grid container justify="space-evenly" className={classes.container}>
            {/* Material UI Videoのデータ(image, title, completed)をMapしている*/}
            {MVideo.map((video) => (
              <AllVideoItems
                key={video.id}
                title={video.title}
                image={video.image}
                path={video.path}
                completed={video.completed}
              />
            ))}
            {/* React Videoのデータ(image, title, completed)をMapしている*/}
            {RVideo.map((video) => (
              <AllVideoItems
                key={video.id}
                title={video.title}
                image={video.image}
                path={video.path}
                completed={video.completed}
              />
            ))}
            {/* React Router Videoのデータ(image, title, completed)をMapしている*/}
            {RRVideo.map((video) => (
              <AllVideoItems
                key={video.id}
                title={video.title}
                image={video.image}
                path={video.path}
                completed={video.completed}
              />
            ))}
          </Grid>
        </Grid>
        <Grid item sm={2} />
      </Grid>
    </div>
  );
};

export { AllVideos };
