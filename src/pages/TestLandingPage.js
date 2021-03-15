import React from 'react';
import { firebase } from '../firebase/firebase.util';
import { useHistory } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import { Card, CardContent, Typography } from '@material-ui/core';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import CheckIcon from '@material-ui/icons/Check';
import Top from '../assets/images/top.svg';
import Step from '../assets/images/Step.svg';
import Data from '../assets/images/Data.svg';
import Output from '../assets/images/Output.svg';

import ReactImage from '../assets/images/react.svg';
import ReactRouterImage from '../assets/images/reactRouter.svg';
import MaterialImage from '../assets/images/material.svg';
import FirebaseImage from '../assets/images/firebase.svg';
import TypeScriptImage from '../assets/images/typescript.svg';
import NodeImage from '../assets/images/node.svg';
import AwsImage from '../assets/images/aws.svg';
import DockerImgae from '../assets/images/docker.svg';
import JavaScriptImage from '../assets/images/javascript.svg';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  test: {
    [theme.breakpoints.down('sm')]: {
      color: 'red',
      backgroundColor: 'red',
    },
    [theme.breakpoints.up('sm')]: {
      color: 'blue',
      backgroundColor: 'blue',
    },
  },
  img: {
    [theme.breakpoints.down('sm')]: {
      width: 300,
      textAlign: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      width: 400,
      textAlign: 'center',
    },
  },
}));

const imageData = [
  ReactImage,
  ReactRouterImage,
  MaterialImage,
  FirebaseImage,
  TypeScriptImage,
  NodeImage,
  AwsImage,
  DockerImgae,
  JavaScriptImage,
];

const cardData = [
  {
    title: 'Progress',
    // description:
    //   'YouTube動画なので完全無料。無料とは思えないほどコンテンツの質が高いのでオススメ',
    description:
      'Missionをこなして達成率を上げてみよう。それぞれのコースの達成率を管理・把握出来る。',
    image: Data,
  },
  {
    title: 'Motivation',
    description:
      '視覚的にどのくらい進めたのか分かるので、モチベーションの維持にも繋がる。',
    image: Step,
  },
  {
    title: 'Output',
    description:
      '分からなかった事をメモしたり、学んだ事もSNSでシェアしてみませんか？',
    image: Output,
  },
];

export const TestLandingPage = () => {
  const history = useHistory();
  const classes = useStyles();

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

  const params = {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };

  return (
    <Grid container>
      <Grid item sm={1} xs={1} />
      <Grid container>
        <Grid item sm={1} xs={1} />
        <Grid item sm={10} xs={10}>
          <Grid container style={{ justifyContent: 'center' }} spacing={4}>
            <Grid item>
              <Fade left delay={500}>
                <div>
                  <Typography variant="h4" style={{ marginBottom: '20px' }}>
                    Mission in Programing
                  </Typography>
                </div>
                <div style={{ display: 'flex' }}>
                  <div>
                    <CheckIcon style={{ marginRight: '5px', color: 'green' }} />
                  </div>
                  <div>
                    <Typography variant="subtitle1">
                      チュートリアルは終わったけど、次に何を学習したらいいのか分からない...
                    </Typography>
                  </div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div>
                    <CheckIcon style={{ marginRight: '5px', color: 'green' }} />
                  </div>
                  <div>
                    <Typography variant="subtitle1">
                      基礎は学習したけど、何を作っていいのか分からない...
                    </Typography>
                  </div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div>
                    <CheckIcon style={{ marginRight: '5px', color: 'green' }} />
                  </div>
                  <Grid>
                    <Typography variant="subtitle1">
                      そんなアナタにおすすめのMission (動画) をPick Upしました！
                    </Typography>
                  </Grid>
                </div>
              </Fade>
              <Grid container spacing={2} style={{ marginTop: '20px' }}>
                <Grid item>
                  <Fade top delay={500}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="button"
                      onClick={handleGuestLogin}
                    >
                      ゲストとして使ってみる
                    </Button>
                  </Fade>
                </Grid>
                <Grid item>
                  <Fade top delay={500}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="button"
                      onClick={handleLoginPage}
                    >
                      ログインはこちら
                    </Button>
                  </Fade>
                </Grid>
              </Grid>
              <Grid item sm={1} xs={1} />
            </Grid>
            <Hidden smDown mdDown xlDown>
              <Grid item>
                <div style={{ width: 700, height: 400 }}>
                  <Fade top delay={500}>
                    <img src={Top} width="100%" height="100%" alt="Top" />
                  </Fade>
                </div>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
        <Grid item sm={1} xs={1} />
      </Grid>
      <Grid
        container
        spacing={4}
        style={{ justifyContent: 'center', marginTop: '60px' }}
      >
        {cardData.map((card, index) => (
          <Grid item key={index}>
            <Fade left delay={500}>
              <Card className={classes.img}>
                <img
                  src={card.image}
                  style={{ width: '200px', height: '150px', marginTop: 20 }}
                  alt={card.title}
                />
                <CardContent style={{ textAlign: 'center' }}>
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{ marginBottom: '5px' }}
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        style={{
          justifyContent: 'center',
          marginTop: '100px',
          marginBottom: 70,
        }}
      >
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Fade left delay={500}>
            <Typography
              variant="h4"
              component="h4"
              style={{ marginBottom: 40, textAlign: 'center' }}
            >
              現在50個以上のMissionが用意されています。
            </Typography>
            <Typography
              variant="subtitle1"
              component="h4"
              color="textSecondary"
              style={{ marginBottom: 10, textAlign: 'center' }}
            >
              ・YouTube動画なので完全無料。無料とは思えないほどコンテンツの質が高いのでオススメ
            </Typography>
            <Typography
              variant="subtitle1"
              component="h4"
              color="textSecondary"
              style={{ marginBottom: 10, textAlign: 'center' }}
            >
              ・テキストよりもイメージしやすい。実際のコーディングも見れるので、気付きがあるかも？
            </Typography>
            <Typography
              variant="subtitle1"
              component="h4"
              color="textSecondary"
              style={{ marginBottom: 10, textAlign: 'center' }}
            >
              ・学習時間が取れないなら通勤・通学のスキマ時間を活用して学習を進めてみませんか？
            </Typography>
          </Fade>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Grid container>
        <Grid item sm={2} xs={1} />
        <Grid item sm={8} xs={10}>
          <Swiper {...params}>
            {imageData.map((image, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <img
                  src={image}
                  style={{ width: '200px', height: '200px' }}
                  alt={index}
                />
              </div>
            ))}
          </Swiper>
        </Grid>
        <Grid item sm={2} xs={1} />
      </Grid>
      <Grid item sm={1} xs={1} />
    </Grid>
  );
};
