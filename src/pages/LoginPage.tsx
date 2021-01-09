import React from 'react';
import { LoginForm } from '../components/LoginForm';
import { Grid, Typography } from '@material-ui/core';
import { loginStyles } from '../style/style';

const LoginPage = () => {
  const classes = loginStyles();
  return (
    <Grid container className={classes.container} spacing={4}>
      <Grid item sm={4} style={{ marginTop: '90px' }}>
        <Typography variant="h5">アカウントをお持ちの方</Typography>
        <Typography>メールアドレスでログイン</Typography>
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export { LoginPage };
