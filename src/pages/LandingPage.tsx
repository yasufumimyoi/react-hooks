import React from 'react';
import { firebase } from '../firebase/firebase.util';
import { useHistory } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Top from '../assets/images/top.svg';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: '0.5em',
    width: '250px',
    height: '50px',
  },
  layout: {
    marginTop: '150px',
  },
  layout2: {
    marginTop: '100px',
    textAlign: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
  },
  layout3: {
    marginBottom: '50px',
  },
  enf: {
    color: 'red',
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const history = useHistory();

  //匿名ユーザーログイン
  //Sessionの有効時間は1時間
  const handleGuestLogin = () => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        history.push('/courses');
        return firebase.auth().signInAnonymously();
      })
      .catch(function (error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  //ログインページに移動する
  const handleLoginPage = () => {
    history.push('/login');
  };

  return (
    <Grid container spacing={3}>
      <Grid item sm={1} />
      <Grid item sm={4} className={classes.layout}>
        <div>
          <img src={Top} width="100%" alt="top" />
        </div>
      </Grid>
      <Grid item sm={6} className={classes.layout2}>
        <div className={classes.layout3}>
          <Typography variant="h4">
            YouTube動画を活用してReactを学習してみよう
          </Typography>
          <div>
            <List>
              <ListItem>
                <ListItemIcon>
                  <DoneOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="無料でプログラミングが学べる" />
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemIcon>
                  <DoneOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="動画で学べるので、テキストよりもイメージしやすい" />
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemIcon>
                  <DoneOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="スキマ時間を活用してどこでも学習出来る" />
              </ListItem>
            </List>
          </div>
        </div>
        <div>
          <Typography variant="h4">
            自分の学習進捗率を管理することが出来ます
          </Typography>
          <div>
            <List>
              <ListItem>
                <ListItemIcon>
                  <DoneOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="自分の進捗具合を視覚的に分かりやすく進めていくことができる" />
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemIcon>
                  <DoneOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="今どのくらい進めたのかが分かると目標も立てやすくなる" />
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemIcon>
                  <DoneOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="モチベーションの維持につながる" />
              </ListItem>
            </List>
          </div>
        </div>
        <div></div>
        <Grid container className={classes.buttonContainer}>
          <Grid>
            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={handleGuestLogin}
              className={classes.button}
            >
              ゲストとして使ってみる
            </Button>
          </Grid>
          <Grid>
            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={handleLoginPage}
              className={classes.button}
            >
              ログインはこちら
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={1} />
    </Grid>
  );
};

export { LandingPage };

// <h2>YouTube動画を活用してReactを学習してみよう</h2>
// <ul>
//   <li>無料でプログラミングが学べる</li>
//   <li>動画で学べるので、テキストよりもイメージしやすい</li>
//   <li>スキマ時間を活用してどこでも学習出来る</li>
// </ul>
// <h3>自分の学習進捗率を管理することが出来ます。</h3>
// <ul>
//   <li>自分の進捗具合を視覚的に分かりやすく進めていくことができる</li>
//   <li>今どのくらい進めたのかが分かると目標も立てやすくなる</li>
//   <li>モチベーションの維持につながる</li>
// </ul>
// <h3>React以外のYoutube動画もあります。</h3>
// <ul>
//   <li>Nodejs</li>
//   <li>TypeScript</li>
//   <li>Firebase</li>
//   <li>etc.</li>
// </ul>
// <p>※ 随時追加していく予定です</p>
