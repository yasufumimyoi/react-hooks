import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Box, Checkbox, Grid, Typography } from "@material-ui/core";
import { VideoContext } from "../context/video-context";
import CountUp from "react-countup";
import { videosUseStyles } from "../style/pages";

const ReactRouterPage = () => {
  const classes = videosUseStyles();
  const history = useHistory();
  const { RRVideo } = useContext(VideoContext);

  //動画視聴済かどうかcompletedの値を見ている
  let numberOfCompleted = 0;
  for (let i = 0; i < RRVideo.length; i++) {
    if (RRVideo[i].completed === true) {
      numberOfCompleted = numberOfCompleted + 1;
    }
  }

  //動画視聴済の割合の計算を行っている
  let AchievementRate =
    Math.round((numberOfCompleted / RRVideo.length) * 100) || 0;

  const handleRouter = (path) => {
    history.push(path);
  };

  return (
    <div>
      <Grid container>
        <Grid item>
          <h3>
            {" "}
            現在の進捗率{" "}
            <CountUp
              end={AchievementRate}
              duration={5}
              className={classes.number}
            />{" "}
            %
          </h3>
        </Grid>
      </Grid>
      <Grid container>
        {RRVideo.map((video) => (
          <Grid item className={classes.outline} key={video.id}>
            <Box>
              <img
                src={video.image}
                alt={video.id}
                onClick={() => handleRouter(video.path)}
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
    </div>
  );
};

export { ReactRouterPage };
