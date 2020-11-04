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
      .signInAnonymously()
      .then(() => {
        history.push("/courses");
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
        アカウント登録して使ってみる
      </Button>
    </div>
  );
};

export default LandingPage;
