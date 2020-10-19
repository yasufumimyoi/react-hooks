import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import VideoContext from "../context/video-context";

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

  const handleRouter = (path) => {
    history.push(path);
  };

  return (
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
  );
};

export default ReactRouterPage;
