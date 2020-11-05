import React from "react";
import firebase from "../firebase/firebase.util";
import { useHistory } from "react-router-dom";
import { provider } from "../firebase/firebase.util";
import Button from "@material-ui/core/Button";

const LandingPage = () => {
  const history = useHistory();

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

  const handelLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        history.push("/courses");
      });
  };

  return (
    <div>
      <h2>Reactを学習してみよう</h2>
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={handleGuestLogin}
      >
        ゲストとして使ってみる
      </Button>
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={handelLogin}
      >
        ログインする
      </Button>
    </div>
  );
};

export default LandingPage;
