import React, { useContext } from "react";
import VideoContext from "../context/video-context";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    marginRight: "60px",
    marginBottom: 40,
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
const AllVideos = () => {
  const classes = useStyles();
  const history = useHistory();
  const { MVideo, RVideo, RRVideo } = useContext(VideoContext);

  const handleRouter = (path) => {
    history.push(path);
  };

  return (
    <Grid container>
      {MVideo.map((video) => (
        <Grid item className={classes.outline} key={video.id}>
          <Box className={classes.box}>
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
      {RVideo.map((video) => (
        <Grid item className={classes.outline} key={video.id}>
          <Box className={classes.box}>
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
      {RRVideo.map((video) => (
        <Grid item className={classes.outline} key={video.id}>
          <Box className={classes.box}>
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
  );
};

export default AllVideos;
