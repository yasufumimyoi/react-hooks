import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Courses from "./Courses";

const useStyles = makeStyles(() => ({
  link: {
    marginRight: "8px",
    color: "white",
    textDecoration: "none",
  },
}));

const HeaderRouter = () => {
  const classes = useStyles();
  return (
    <Router>
      <Link className={classes.link} to="courses">
        Courses
      </Link>
      <Link className={classes.link} to="login">
        Login
      </Link>
      <Link className={classes.link} to="join">
        Join Now
      </Link>
    </Router>
  );
};

export default HeaderRouter;
