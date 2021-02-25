import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, TextField, Typography } from '@material-ui/core';
import { loginStyles } from '../../style/style';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { firebase } from '../../firebase/firebase.util';
import { provider, app } from '../../firebase/firebase.util';
import { useHistory } from 'react-router-dom';
import { AuthProps } from '../../types/types';

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

export const LoginForm = () => {
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

  return (
    <div>
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
        <Button
          style={{ marginTop: '10px' }}
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
        >
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
    </div>
  );
};
