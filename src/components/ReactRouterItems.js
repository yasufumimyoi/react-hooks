import React from "react";
import { Box, Checkbox, Typography } from "@material-ui/core";
import { videosUseStyles } from "../style/pages";
import { useHistory } from "react-router-dom";

const ReactRouterItems = ({ id, title, image, path, completed }) => {
  const classes = videosUseStyles();
  const history = useHistory();
  const handleRouter = (path) => {
    history.push(path);
  };
  return (
    <Box className={classes.box}>
      <img src={image} alt={id} onClick={() => handleRouter(path)} />
      <Typography variant="body1" component="p" className={classes.videoTitle}>
        {title}
      </Typography>
      <Box className={classes.adjust}>
        <Typography variant="body2" color="textSecondary" component="span">
          Completed
        </Typography>
        <Checkbox
          checked={completed}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </Box>
    </Box>
  );
};

export { ReactRouterItems };
