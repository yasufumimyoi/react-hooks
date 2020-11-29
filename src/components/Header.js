import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import SchoolIcon from "@material-ui/icons/School";
import { HeaderButtons } from "./HeaderButtons";
import { headerStyles } from "../style/pages";
import { VideoContext } from "../context/video-context";

const Header = () => {
  const classes = headerStyles();
  const history = useHistory();
  const { currentUser, guestUser } = useContext(VideoContext);

  //コース一覧ページに移動する
  const handleCourseRoute = () => {
    history.push("/courses");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <SchoolIcon className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            Learn React
          </Typography>
          {currentUser && <HeaderButtons />}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export { Header };
