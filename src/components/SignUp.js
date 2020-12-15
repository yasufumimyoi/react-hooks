import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextField, Grid, Typography } from "@material-ui/core";
import { loginStyles } from "../style/pages";
import AccountCircle from "@material-ui/icons/AccountCircle";
import firebase from "../firebase/firebase.util";
import { provider } from "../firebase/firebase.util";
import { useHistory } from "react-router-dom";
import { VideoContext } from "../context/video-context";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("メールアドレスの形式に誤りがあります")
    .required("メールアドレスは必須です"),
  password: yup
    .string()
    .min(8, "8文字以上のパスワードを入力して下さい")
    .required("パスワードは必須です"),
});

export const SignUp = () => {
  const classes = loginStyles();
  const [formState, setFormState] = useState({});

  const { MVideo, RVideo, RRVideo, setGuestUser } = useContext(VideoContext);

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onChange = (event) => {
    setFormState({
      ...formState,
      ...{ [event.target.name]: event.target.value },
    });
  };

  const handleLogin = () => {
    history.push("/login");
  };

  const history = useHistory();

  //メールで新規登録
  const createAccountWithEmail = ({ email, password }) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        history.push("/courses");
        reset();
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  //SessionからGoogleアカウントを通じて新規登録
  const createAccountWithGoogle = async () => {
    try {
      const newUser = await firebase.auth().currentUser.linkWithPopup(provider);
      await firebase
        .firestore()
        .collection("users")
        .doc(newUser.user.uid)
        .set({
          material: [...MVideo],
          react: [...RVideo],
          router: [...RRVideo],
        });
      await setGuestUser(null);
      await history.push("/courses");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Grid container className={classes.layout} spacing={4}>
      <Grid item sm={4}>
        <Typography variant="h5">新規登録</Typography>
        <Typography>メールアドレスで登録</Typography>
        <form
          onSubmit={handleSubmit(createAccountWithEmail)}
          className={classes.root}
        >
          <TextField
            label="Email"
            type="text"
            name="email"
            fullWidth
            inputRef={register}
            onChange={onChange}
          />
          {errors.email && (
            <div className={classes.validate}>{errors.email.message}</div>
          )}
          <TextField
            label="password"
            type="password"
            name="password"
            fullWidth
            inputRef={register}
            onChange={onChange}
          />
          {errors.password && (
            <div className={classes.validate}>{errors.password.message}</div>
          )}
          <Button variant="contained" color="primary" type="submit" fullWidth>
            送信
          </Button>
          <Typography>Googleアカウントで登録</Typography>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            startIcon={<AccountCircle />}
            onClick={createAccountWithGoogle}
          >
            Google
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
          >
            既にアカウントをお持ちの方はこちら
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};
