import React from "react";

import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SchoolIcon from "@material-ui/icons/School";

import HeaderRouter from "./HeaderRouter";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "40px",
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: "pointer",
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleRoute = () => {
    history.push("/courses");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <SchoolIcon className={classes.logo} />
          <Typography
            variant="h6"
            className={classes.title}
            onClick={handleRoute}
          >
            Learn React
          </Typography>
          <HeaderRouter />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
