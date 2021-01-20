import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, TextField, Typography, Grid } from '@material-ui/core';
import { loginStyles } from '../style/style';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { firebase } from '../firebase/firebase.util';
import { provider, app } from '../firebase/firebase.util';
import { useHistory } from 'react-router-dom';
import { AuthProps } from '../types/types';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

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

export const LoginPage = () => {
  const classes = loginStyles();
  const [formState, setFormState] = useState({});
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onChange = (event: any) => {
    setFormState({
      ...formState,
      ...{ [event.target.name]: event.target.value },
    });
  };

  const history = useHistory();

  //既存ユーザーのメールでのログイン
  const handelExistingUserEmailLogin = async ({
    email,
    password,
  }: AuthProps) => {
    try {
      await app.auth().signInWithEmailAndPassword(email, password);
      await history.push('/courses');
      reset();
    } catch (error) {
      console.error(error.message);
    }
  };

  //既存ユーザーのGoogleアカウントでのログイン
  const handelExistingUserLogin = () => {
    try {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          history.push('/courses');
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleRest = () => {
    history.push('/reset');
  };

  const handleHome = () => {
    history.push('/');
  };

  return (
    <Grid container className={classes.container} spacing={4}>
      <Grid item sm={4} xs={10} style={{ marginTop: '90px' }}>
        <Typography variant="h5">既にアカウントをお持ちの方</Typography>
        <Typography>メールアドレスで登録</Typography>
        <form
          onSubmit={handleSubmit(handelExistingUserEmailLogin)}
          className={classes.root}
        >
          <div>
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
              style={{ marginBottom: '15px' }}
            />
            {errors.password && (
              <div className={classes.validate}>{errors.password.message}</div>
            )}
            <Button variant="contained" color="primary" type="submit" fullWidth>
              送信
            </Button>
          </div>
          <div>
            <Typography style={{ marginBottom: '15px', marginTop: '15px' }}>
              他サイトのIDで簡単ログイン
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={4} sm={4}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  startIcon={<AccountCircle />}
                  onClick={handelExistingUserLogin}
                  style={{ marginBottom: '15px' }}
                >
                  Google
                </Button>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  startIcon={<GitHubIcon />}
                >
                  GitHub
                </Button>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  startIcon={<TwitterIcon />}
                >
                  Twitter
                </Button>
              </Grid>
            </Grid>
          </div>
          <div style={{ marginTop: 50, cursor: 'pointer' }}>
            <p onClick={handleRest}>パスワードを忘れた方はこちら</p>
            <p onClick={handleHome}>ホーム画面に戻る</p>
          </div>
        </form>
      </Grid>
    </Grid>
  );
};
