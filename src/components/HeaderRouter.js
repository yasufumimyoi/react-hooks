import React, { useContext } from "react";

import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import VideoContext from "../context/video-context";

const useStyles = makeStyles(() => ({
  link: {
    marginRight: "8px",
    color: "white",
  },
}));

const HeaderRouter = () => {
  const classes = useStyles();
  const history = useHistory();

  const handelCourses = () => {
    history.push("/courses");
  };

  const handelLogin = () => {
    history.push("/login");
  };

  const handelJoin = () => {
    history.push("/join");
  };
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.link}
        type="button"
        onClick={handelCourses}
      >
        Courses
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.link}
        type="button"
        onClick={handelLogin}
      >
        Login
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.link}
        type="button"
        onClick={handelJoin}
      >
        Join Now
      </Button>
    </div>
  );
};

export default HeaderRouter;
