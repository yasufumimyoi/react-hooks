import React, { useContext } from "react";
import { VideoContext } from "../context/video-context";
import { Grid } from "@material-ui/core";
import { AllVideoItems } from "./AllVideoItems";
import { videosUseStyles } from "../style/pages";

const AllVideos = () => {
  const {
    AWVideo,
    DVideo,
    FVideo,
    JVideo,
    MVideo,
    NVideo,
    RVideo,
    RRVideo,
    TVideo,
  } = useContext(VideoContext);
  const classes = videosUseStyles();
  return (
    <div>
      <Grid container>
        <Grid item sm={2} />
        <Grid item sm={8}>
          <Grid container justify="space-evenly" className={classes.container}>
            {/* AWS Videoのデータ(image, title, completed)をMapしている*/}
            {AWVideo.map((video) => (
              <AllVideoItems
                key={video.id}
                title={video.title}
                image={video.image}
                path={video.path}
                completed={video.completed}
              />
            ))}
            {/* Docker UI Videoのデータ(image, title, completed)をMapしている*/}
            {DVideo.map((video) => (
              <AllVideoItems
                key={video.id}
                title={video.title}
                image={video.image}
                path={video.path}
                completed={video.completed}
              />
            ))}
            {/* Firebase Videoのデータ(image, title, completed)をMapしている*/}
            {FVideo.map((video) => (
              <AllVideoItems
                key={video.id}
                title={video.title}
                image={video.image}
                path={video.path}
                completed={video.completed}
              />
            ))}
            {/* Javascript Videoのデータ(image, title, completed)をMapしている*/}
            {JVideo.map((video) => (
              <AllVideoItems
                key={video.id}
                title={video.title}
                image={video.image}
                path={video.path}
                completed={video.completed}
              />
            ))}
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
            {/* Node Videoのデータ(image, title, completed)をMapしている*/}
            {NVideo.map((video) => (
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
            {/* Typescript Videoのデータ(image, title, completed)をMapしている*/}
            {TVideo.map((video) => (
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
