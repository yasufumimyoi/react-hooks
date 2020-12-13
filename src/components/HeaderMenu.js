import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import firebase from "../firebase/firebase.util";
import { VideoContext } from "../context/video-context";
import { Box } from "@material-ui/core";

export const HeaderMenu = () => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { setCurrentUser, guestUser, setGuestUser } = useContext(VideoContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //コース一覧ページに移動する
  const handelCoursesRoute = () => {
    history.push("/courses");
    setAnchorEl(null);
  };

  //ログインページに移動する
  const handelLoginRoute = () => {
    history.push("/login");
    setAnchorEl(null);
  };

  //ログアウト機能
  //セッションも終わる
  const handleLogout = () => {
    try {
      firebase
        .auth()
        .signOut()
        .then(() => {
          setCurrentUser(null);
          setGuestUser(null);
          sessionStorage.clear();
          history.push("/");
        });
      setAnchorEl(null);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      {guestUser ? (
        <Box>
          <MenuIcon
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          ></MenuIcon>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handelCoursesRoute}>Courses</MenuItem>
            <MenuItem onClick={handleLogout}>Log out</MenuItem>
            <MenuItem onClick={handelLoginRoute}>Create Account</MenuItem>
          </Menu>
        </Box>
      ) : (
        <Box>
          <MenuIcon
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          ></MenuIcon>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handelCoursesRoute}>Courses</MenuItem>
            <MenuItem onClick={handleLogout}>Log out</MenuItem>
          </Menu>
        </Box>
      )}
    </div>
  );
};
