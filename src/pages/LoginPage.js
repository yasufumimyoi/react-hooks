import React from 'react';
import { LoginForm } from '../components/LoginForm';
import { Button, TextField, Grid, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { loginStyles } from '../style/style';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const classes = loginStyles();
  const history = useHistory();

  const handelNewUser = () => {
    history.push('/sign');
  };

  return (
    <Grid container className={classes.container} spacing={4}>
      <Grid item sm={4}>
        <Typography variant="h5">アカウントをお持ちの方</Typography>
        <Typography>メールアドレスでログイン</Typography>
        <LoginForm />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          startIcon={<AccountCircle />}
          onClick={handelNewUser}
        >
          新規アカウント登録の方はこちら
        </Button>
      </Grid>
    </Grid>
  );
};

export { LoginPage };
