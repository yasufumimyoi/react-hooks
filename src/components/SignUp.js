import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Button,
  TextField,
  Grid,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { loginStyles } from "../style/pages";
import AccountCircle from "@material-ui/icons/AccountCircle";
import firebase from "../firebase/firebase.util";
import { provider } from "../firebase/firebase.util";
import { useHistory } from "react-router-dom";
import { VideoContext } from "../context/video-context";

const schema = yup.object().shape({
  email: yup.string().email().required("メールアドレスを入力して下さい"),
  password: yup.string().required("パスワードを入力して下さい"),
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
    <Grid container container container className={classes.layout} spacing={4}>
      <Grid item>
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
          {errors.email && <div>{errors.email.message}</div>}
          <TextField
            label="password"
            type="text"
            name="password"
            fullWidth
            inputRef={register}
            onChange={onChange}
          />
          {errors.password && <div>{errors.password.message}</div>}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            type="submit"
          >
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
        </form>
      </Grid>
    </Grid>
  );
};
