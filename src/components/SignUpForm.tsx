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

export const SignUpForm = () => {
  const classes = loginStyles();
  const history = useHistory();
  const [formState, setFormState] = useState({});

  const { setGuestUser } = useContext(VideoContext);

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
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      await setGuestUser(null);
      history.push('/courses');
      reset();
    } catch (error) {
      //handle exception...
    }
  };

  //SessionからGoogleアカウントを通じて新規登録
  const createAccountWithGoogle = async () => {
    try {
      await firebase.auth()?.currentUser?.linkWithPopup(provider);
      await setGuestUser(null);
      await history.push('/courses');
    } catch (error) {
      //handle exception...
    }
  };

  return (
    <Grid container className={classes.container} spacing={4}>
      <Grid item sm={4} xs={10} style={{ marginTop: '90px' }}>
        <Typography variant="h5">新規登録</Typography>
        <Typography>メールアドレスで登録</Typography>
        <form
          onSubmit={handleSubmit(createAccountWithEmail)}
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
                  onClick={createAccountWithGoogle}
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
                  onClick={createAccountWithGoogle}
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
                  onClick={createAccountWithGoogle}
                >
                  Twitter
                </Button>
              </Grid>
            </Grid>
          </div>
        </form>
      </Grid>
    </Grid>
  );
};
