import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AllVideosStyles } from "../style/pages";
import { VideoContext } from "../context/video-context";
import { Box, Checkbox, Grid, Typography } from "@material-ui/core";

const AllVideos = () => {
  const classes = AllVideosStyles();
  const history = useHistory();
  const { MVideo, RVideo, RRVideo } = useContext(VideoContext);

  //それぞれの動画ページに移動する
  const handleEachVideoRouter = (path) => {
    history.push(path);
  };

  return (
    <Grid container>
      {/* Material UI Videoのデータ(image, title, completed)をMapしている*/}
      {MVideo.map((video) => (
        <Grid item className={classes.outline} key={video.id}>
          <Box className={classes.box}>
            <img
              src={video.image}
              alt={video.id}
              onClick={() => handleEachVideoRouter(video.path)}
            />
            <Typography
              variant="body1"
              component="p"
              className={classes.videoTitle}
            >
              {video.title}
            </Typography>
            <Box className={classes.adjust}>
              <Typography
                variant="body2"
                color="textSecondary"
                component="span"
              >
                Completed
              </Typography>
              <Checkbox
                checked={video.completed}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </Box>
          </Box>
        </Grid>
      ))}
      {/* React Videoのデータ(image, title, completed)をMapしている*/}
      {RVideo.map((video) => (
        <Grid item className={classes.outline} key={video.id}>
          <Box className={classes.box}>
            <img
              src={video.image}
              alt={video.id}
              onClick={() => handleEachVideoRouter(video.path)}
            />
            <Typography
              variant="body1"
              component="p"
              className={classes.videoTitle}
            >
              {video.title}
            </Typography>
            <Box className={classes.adjust}>
              <Typography
                variant="body2"
                color="textSecondary"
                component="span"
              >
                Completed
              </Typography>
              <Checkbox
                checked={video.completed}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </Box>
          </Box>
        </Grid>
      ))}
      {/* React Router Videoのデータ(image, title, completed)をMapしている*/}
      {RRVideo.map((video) => (
        <Grid item className={classes.outline} key={video.id}>
          <Box className={classes.box}>
            <img
              src={video.image}
              alt={video.id}
              onClick={() => handleEachVideoRouter(video.path)}
            />
            <Typography
              variant="body1"
              component="p"
              className={classes.videoTitle}
            >
              {video.title}
            </Typography>
            <Box className={classes.adjust}>
              <Typography
                variant="body2"
                color="textSecondary"
                component="span"
              >
                Completed
              </Typography>
              <Checkbox
                checked={video.completed}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export { AllVideos };
