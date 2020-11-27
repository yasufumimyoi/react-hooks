import React from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import SchoolIcon from "@material-ui/icons/School";
import { HeaderButtons } from "./HeaderButtons";
import { headerStyles } from "../style/pages";

const Header = () => {
  const classes = headerStyles();
  const history = useHistory();

  //コース一覧ページに移動する
  const handleCourseRoute = () => {
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
            onClick={handleCourseRoute}
          >
            Learn React
          </Typography>
          <HeaderButtons />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export { Header };
