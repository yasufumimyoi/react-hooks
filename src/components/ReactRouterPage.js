import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import VideoContext from "../context/video-context";
import CountUp from "react-countup";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginRight: "30px",
    marginBottom: 25,
  },
  title: {
    marginBottom: 14,
    width: "100%",
  },
  subTitle: {
    marginBottom: 30,
    width: "100%",
  },
  description: {
    marginBottom: 20,
    textAlign: "center",
  },
  number: {
    fontSize: 30,
  },
  test: {
    marginRight: "30px",
    cursor: "pointer",
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
            You have completed{" "}
            <CountUp
              end={AchievementRate}
              duration={5}
              className={classes.number}
            />{" "}
            % of the course
          </h3>
        </Grid>
      </Grid>
      <Grid container>
        {RRVideo.map((video) => (
          <Grid item className={classes.test} key={video.id}>
            <Checkbox
              checked={video.completed}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <img
              src={video.image}
              alt={video.id}
              onClick={() => handleRouter(video.path)}
            />
            <p>{video.title}</p>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ReactRouterPage;
