import React from "react";
import firebase from "../firebase/firebase.util";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import Top from "../images/top.svg";
import "../style/landing.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: "0.5em",
    width: "250px",
    height: "50px",
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const history = useHistory();

  //匿名ユーザーログイン
  //Sessionの有効時間は1時間
  const handleGuestLogin = () => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        history.push("/courses");
        return firebase.auth().signInAnonymously();
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  //ログインページに移動する
  const handleLoginPage = () => {
    history.push("/login");
  };

  return (
    <div className="landing_container">
      <div className="landing_img">
        <img src={Top} width="100%" />
      </div>
      <div className="landing_content">
        <h2>YouTube動画を活用してReactを学習してみよう</h2>
        <h3>
          未視聴 or
          視聴済みを変更していくことで、自分の進捗具合を視覚的に分かりやすく進めていくことができます。
        </h3>
        <h3>React以外にもTypeScript, Firebase, Nodejsなどもあります。</h3>
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={handleGuestLogin}
          className={classes.button}
        >
          ゲストとして使ってみる
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={handleLoginPage}
          className={classes.button}
        >
          ログインまたは登録はこちら
        </Button>
      </div>
    </div>
  );
};

export { LandingPage };

// useEffect(() => {
//   firebase
//     .firestore()
//     .collection("videos")
//     .doc("router")
//     .set({
//       router: [
//         {
//           id: 1,
//           url: "https://www.youtube.com/watch?v=Law7wfdg_ls&t=15s",
//           image: "http://img.youtube.com/vi/Law7wfdg_ls/mqdefault.jpg",
//           title: "React Router Tutorial | React For Beginners",
//           path: "/courses/react-router/1",
//           completed: false,
//         },
//         {
//           id: 2,
//           url: "https://www.youtube.com/watch?v=Myq2ssDQoDw",
//           image: "http://img.youtube.com/vi/Myq2ssDQoDw/mqdefault.jpg",
//           title: "Learn React Router in 10 Minutes! | React Tutorials",
//           path: "/courses/react-router/2",
//           completed: false,
//         },
//         {
//           id: 3,
//           url: "https://www.youtube.com/watch?v=CZeulkp1ClA",
//           image: "http://img.youtube.com/vi/CZeulkp1ClA/mqdefault.jpg",
//           title:
//             "React router with hooks ( useHistory useParam useLocation )",
//           path: "/courses/react-router/3",
//           completed: false,
//         },
//         {
//           id: 4,
//           url: "https://www.youtube.com/watch?v=eofpZPRUnP8",
//           image: "http://img.youtube.com/vi/eofpZPRUnP8/mqdefault.jpg",
//           title: "ReactJS Basics - #15 React Router - Route Setup",
//           path: "/courses/react-router/4",
//           completed: false,
//         },
//         {
//           id: 5,
//           url: "https://www.youtube.com/watch?v=hjR-ZveXBpQ",
//           image: "http://img.youtube.com/vi/hjR-ZveXBpQ/mqdefault.jpg",
//           title:
//             "ReactJS Basics - #16 React Router - Navigation & Parameters",
//           path: "/courses/react-router/5",
//           completed: false,
//         },
//         {
//           id: 6,
//           url: "https://www.youtube.com/watch?v=lCbcB9AU-98",
//           image: "http://img.youtube.com/vi/lCbcB9AU-98/mqdefault.jpg",
//           title: "Intro to React Router for Beginners (Multi-Page Apps)",
//           path: "/courses/react-router/6",
//           completed: false,
//         },
//         {
//           id: 7,
//           url: "https://www.youtube.com/watch?v=yQf1KbGiwiI",
//           image: "http://img.youtube.com/vi/yQf1KbGiwiI/mqdefault.jpg",
//           title: "React Router Tutorial - Setup in 5 Minutes",
//           path: "/courses/react-router/7",
//           completed: false,
//         },
//         {
//           id: 8,
//           url: "https://www.youtube.com/watch?v=110dW3l5GQY",
//           image: "http://img.youtube.com/vi/110dW3l5GQY/mqdefault.jpg",
//           title: "React Router Tutorial",
//           path: "/courses/react-router/8",
//           completed: false,
//         },
//         {
//           id: 9,
//           url: "https://www.youtube.com/watch?v=Y0-qdp-XBJg",
//           image: "http://img.youtube.com/vi/Y0-qdp-XBJg/mqdefault.jpg",
//           title: "Protected Routes in React using React Router",
//           path: "/courses/react-router/9",
//           completed: false,
//         },
//       ],
//     });
// }, []);
