import React, { useContext } from "react";

import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import firebase from "../firebase/firebase.util";

import VideoContext from "../context/video-context";
import { provider } from "../firebase/firebase.util";

const useStyles = makeStyles(() => ({
  link: {
    marginRight: "8px",
    color: "white",
  },
}));

const HeaderButtons = () => {
  const classes = useStyles();
  const history = useHistory();
  const {
    currentUser,
    setCurrentUser,
    guestUser,
    setGuestUser,
    MVideo,
    RVideo,
    RRVideo,
  } = useContext(VideoContext);

  const handelCourses = () => {
    history.push("/courses");
  };

  const handelLogin = () => {
    history.push("/login");
  };

  const handleCreateAccount = () => {
    firebase
      .auth()
      .currentUser.linkWithPopup(provider)
      .then((result) => {
        const creUser = result.user;
        console.log("success", creUser);
        firebase
          .firestore()
          .collection("users")
          .doc(creUser.uid)
          .set({
            material: [...MVideo],
            react: [...RVideo],
            router: [...RRVideo],
          });
      });
  };

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setCurrentUser(null);
        setGuestUser(null);
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
