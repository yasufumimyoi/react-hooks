import React, { useContext } from "react";

import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import firebase from "../firebase/firebase.util";

import VideoContext from "../context/video-context";

const useStyles = makeStyles(() => ({
  link: {
    marginRight: "8px",
    color: "white",
  },
}));

const HeaderButtons = () => {
  const classes = useStyles();
  const history = useHistory();
  const { currentUser, setCurrentUser, guestUser, setGuestUser } = useContext(
    VideoContext
  );

  const handelCourses = () => {
    history.push("/courses");
  };

  const handelLogin = () => {
    history.push("/login");
  };

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setCurrentUser(null);
        setGuestUser(null);
        sessionStorage.clear();
        history.push("/");
      });
  };

  return (
    <div>
      {currentUser &&
        (guestUser != null ? (
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
              onClick={handleLogout}
            >
              Log out
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.link}
              type="button"
              onClick={handelLogin}
            >
              Create Account
            </Button>
          </div>
        ) : (
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
              onClick={handleLogout}
            >
              Log out
            </Button>
          </div>
        ))}
    </div>
  );
};

export default HeaderButtons;
