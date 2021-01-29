import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, TextField, Typography, Grid } from '@material-ui/core';
import { loginStyles } from '../style/style';
import { firebase } from '../firebase/firebase.util';
import { useHistory } from 'react-router-dom';

//フォームのバリデーションの値
const schema = yup.object().shape({
  email: yup
    .string()
    .email('メールアドレスの形式に誤りがあります')
    .required('メールアドレスは必須です'),
});

type ResetProps = {
  email: string;
};

export const Reset = () => {
  const classes = loginStyles();
  const [formState, setFormState] = useState<Partial<ResetProps>>({});
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      ...{ [event.target.name]: event.target.value },
    });
  };

  const history = useHistory();

  const handleReset = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(formState.email as string)
      .then(() => {
        alert(
          '入力されたアドレスにパスワードリセット用のメールをお送りしました'
        );
        reset();
        history.push('/login');
      })
      .catch(() => {
        alert('パスワードリセットに失敗しました');
      });
  };

  const handleLogin = () => {
    history.push('/login');
  };

  return (
    <Grid container className={classes.container} spacing={4}>
      <Grid item sm={4} xs={10} style={{ marginTop: '90px' }}>
        <Typography variant="h5">パスワードのリセット</Typography>
        <Typography>メールアドレスを記入してください</Typography>
        <form className={classes.root} onSubmit={handleSubmit(handleReset)}>
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
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              style={{ marginTop: 40 }}
            >
              Reset Password
            </Button>
            <div style={{ marginTop: 50, cursor: 'pointer' }}>
              <p onClick={handleLogin}>ログイン画面に戻る</p>
            </div>
          </div>
        </form>
      </Grid>
    </Grid>
  );
};
