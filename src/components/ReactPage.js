import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Checkbox, Box, Grid, Typography } from "@material-ui/core";
import { videosUseStyles } from "../style/pages";
import { VideoContext } from "../context/video-context";
import CountUp from "react-countup";

const ReactPage = () => {
  const classes = videosUseStyles();
  const history = useHistory();
  const { RVideo } = useContext(VideoContext);

  //動画視聴済かどうかcompletedの値を見ている
  let numberOfCompleted = 0;
  for (let i = 0; i < RVideo.length; i++) {
    if (RVideo[i].completed === true) {
      numberOfCompleted = numberOfCompleted + 1;
    }
  }

  //動画視聴済の割合の計算を行っている
  let AchievementRate =
    Math.round((numberOfCompleted / RVideo.length) * 100) || 0;

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
        {RVideo.map((video) => (
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

export { ReactPage };
