import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import ReactPlayer from "react-player";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

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

const MaterialUIPage = () => {
  const classes = useStyles();
  const [isFinished, setFinished] = useState(false);
  const [isChanged, setChanged] = useState(false);

  const handleChange = () => {
    setFinished(!isFinished);
  };

  const history = useHistory();

  const handleRouter = () => {
    history.push("/courses/material/test");
  };

  return (
    <Grid container>
      <Grid item className={classes.test}>
        <img
          src="http://img.youtube.com/vi/tKzSnjWPtEw/mqdefault.jpg"
          onClick={handleRouter}
        />
        <Box>
          <Checkbox
            checked={isFinished}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <span variant="p" component="p">
            React + Material UI #2: Actually
          </span>
        </Box>
      </Grid>
      <Grid item className={classes.test}>
        <img src="http://img.youtube.com/vi/tKzSnjWPtEw/mqdefault.jpg" />
        <Box>
          <Checkbox
            checked={isFinished}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <span variant="p" component="p">
            React + Material UI #2: Actually
          </span>
        </Box>
      </Grid>
      <Grid item className={classes.test}>
        <img src="http://img.youtube.com/vi/tKzSnjWPtEw/mqdefault.jpg" />
        <Box>
          <Checkbox
            checked={isFinished}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <span variant="p" component="p">
            React + Material UI #2: Actually
          </span>
        </Box>
      </Grid>
      <Grid item className={classes.test}>
        <img src="http://img.youtube.com/vi/tKzSnjWPtEw/mqdefault.jpg" />
        <Box>
          <Checkbox
            checked={isFinished}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <span variant="p" component="p">
            React + Material UI #2: Actually
          </span>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MaterialUIPage;
