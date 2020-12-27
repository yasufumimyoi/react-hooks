import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, TextField, Grid, Typography } from '@material-ui/core';
import { loginStyles } from '../style/style';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { firebase } from '../firebase/firebase.util';
import { provider } from '../firebase/firebase.util';
import { useHistory } from 'react-router-dom';
import { VideoContext } from '../contexts/video-context';
import { AuthProps } from '../types/types';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('メールアドレスの形式に誤りがあります')
    .required('メールアドレスは必須です'),
  password: yup
    .string()
    .min(8, '8文字以上のパスワードを入力して下さい')
    .required('パスワードは必須です'),
});

export const SignUpForm = () => {
  const classes = loginStyles();
  const history = useHistory();
  const [formState, setFormState] = useState({});

  const {
    AWVideo,
    DVideo,
    FVideo,
    JVideo,
    MVideo,
    NVideo,
    RVideo,
    RRVideo,
    TVideo,
    setGuestUser,
  } = useContext(VideoContext);

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  //Fix me
  const onChange = (event: any) => {
    setFormState({
      ...formState,
      ...{ [event.target.name]: event.target.value },
    });
  };

  //Sessionからメールアドレスで新規登録
  const createAccountWithEmail = async ({ email, password }: AuthProps) => {
    try {
      const newUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      await firebase
        .firestore()
        .collection('users')
        .doc(newUser?.user?.uid)
        .set({
          aws: [...AWVideo],
          docker: [...DVideo],
          firebase: [...FVideo],
          javascript: [...JVideo],
          material: [...MVideo],
          node: [...NVideo],
          react: [...RVideo],
          router: [...RRVideo],
          typescript: [...TVideo],
        });
      await setGuestUser(null);
      history.push('/courses');
      reset();
    } catch (error) {
      console.error(error.message);
    }
  };

  //SessionからGoogleアカウントを通じて新規登録
  const createAccountWithGoogle = async () => {
    try {
      const newUser = await firebase
        .auth()
        ?.currentUser?.linkWithPopup(provider);
      await firebase
        .firestore()
        .collection('users')
        .doc(newUser?.user?.uid)
        .set({
          aws: [...AWVideo],
          docker: [...DVideo],
          firebase: [...FVideo],
          javascript: [...JVideo],
          material: [...MVideo],
          node: [...NVideo],
          react: [...RVideo],
          router: [...RRVideo],
          typescript: [...TVideo],
        });
      await setGuestUser(null);
      await history.push('/courses');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Grid container className={classes.container} spacing={4}>
      <Grid item sm={4} style={{ marginTop: '90px' }}>
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
        </form>
      </Grid>
    </Grid>
  );
};
