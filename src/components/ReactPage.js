import React, { useState } from "react";
import videos from "../videos/ReactVideo";
import { useHistory, Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

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

const ReactPage = () => {
  const classes = useStyles();
  const [isFinished, setFinished] = useState(false);
  const history = useHistory();

  const handleChange = () => {
    setFinished(!isFinished);
  };

  const handleRouter = (path) => {
    history.push(path);
  };

  return (
    <Grid container>
      {videos.map((video) => (
        <Grid item className={classes.test}>
          <Checkbox
            checked={isFinished}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <img src={video.image} onClick={() => handleRouter(video.path)} />
          <p>{video.title}</p>
        </Grid>
      ))}
    </Grid>
  );
};

export default ReactPage;
