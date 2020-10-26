import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import VideoContext from "../context/video-context";
import CountUp from "react-countup";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    marginRight: "30px",
    marginBottom: 25,
  },
  number: {
    fontSize: 30,
  },
  outline: {
    marginRight: "30px",
    cursor: "pointer",
    textOverflow: "ellipsis",
    "&:hover": {
      opacity: "0.7",
      zIndex: "10",
      transition: ".25s",
    },
  },
  box: {
    width: "320px",
  },
  videoTitle: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: "320px",
    textOverflow: "ellipsis",
  },
  adjust: {
    marginBottom: 35,
  },
});

const ReactRouterPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const { RRVideo } = useContext(VideoContext);

  let count = 0;
  for (let i = 0; i < RRVideo.length; i++) {
    if (RRVideo[i].completed == true) {
      count = count + 1;
    }
  }

  let AchievementRate = Math.round((count / RRVideo.length) * 100);

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

export default ReactRouterPage;
