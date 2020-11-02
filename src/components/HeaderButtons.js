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
  const { currentUser, setCurrentUser } = useContext(VideoContext);

  const handelCourses = () => {
    history.push("/courses");
  };

  const handelJoin = () => {
    history.push("/join");
  };

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setCurrentUser(null);
        history.push("/auth");
      });
  };

  return (
    <div>
      {currentUser && (
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
            onClick={handelJoin}
          >
            Create Account
          </Button>
        </div>
      )}
    </div>
  );
};

export default HeaderButtons;
