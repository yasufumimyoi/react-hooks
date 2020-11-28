import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { headerButtonUseStyles } from "../style/pages";
import { VideoContext } from "../context/video-context";
import firebase from "../firebase/firebase.util";

const HeaderButtons = () => {
  const classes = headerButtonUseStyles();
  const history = useHistory();
  const { currentUser, setCurrentUser, guestUser, setGuestUser } = useContext(
    VideoContext
  );

  //コース一覧ページに移動する
  const handelCoursesRoute = () => {
    history.push("/courses");
  };

  //ログインページに移動する
  const handelLoginRoute = () => {
    history.push("/login");
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
    } catch (error) {
      console.error(error.message);
    }
  };

  //guestUserに値が入っていなければ、新規アカウント登録ボタンを表示させない
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
              onClick={handelCoursesRoute}
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
              onClick={handelLoginRoute}
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
              onClick={handelCoursesRoute}
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

export { HeaderButtons };
