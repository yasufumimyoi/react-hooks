import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextField, Grid, Typography } from "@material-ui/core";
import { loginStyles } from "../style/pages";
import AccountCircle from "@material-ui/icons/AccountCircle";
import firebase from "../firebase/firebase.util";
import { provider, app } from "../firebase/firebase.util";
import { useHistory } from "react-router-dom";

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

export const Form = () => {
  const classes = loginStyles();
  const [formState, setFormState] = useState({});
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onChange = (event) => {
    setFormState({
      ...formState,
      ...{ [event.target.name]: event.target.value },
    });
  };

  const history = useHistory();

  //既存ユーザーのメールでのログイン
  const handelExistingUserEmailLogin = async ({ email, password }) => {
    try {
      await app.auth().signInWithEmailAndPassword(email, password);
      await history.push("/courses");
      reset();
    } catch (error) {
      console.error(error.message);
      console.log(email);
      console.log(password);
    }
  };

  //既存ユーザーのGoogleアカウントでのログイン
  const handelExistingUserLogin = () => {
    try {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          history.push("/courses");
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Grid container className={classes.layout} spacing={4}>
      <Grid item sm={4}>
        <Typography variant="h5">アカウントをお持ちの方</Typography>
        <Typography>メールアドレスでログイン</Typography>
        <form
          onSubmit={handleSubmit(handelExistingUserEmailLogin)}
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
          <Typography>Googleアカウントでログイン</Typography>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            startIcon={<AccountCircle />}
            onClick={handelExistingUserLogin}
          >
            Google
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};
