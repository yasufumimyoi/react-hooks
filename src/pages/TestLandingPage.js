import React from 'react';
import { firebase } from '../firebase/firebase.util';
import { useHistory } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import Top from '../assets/images/top.svg';
import YouTubeIcon from '@material-ui/icons/YouTube';
//import HighlightIcon from '@material-ui/icons/Highlight';
//import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import { Card, CardContent, Typography } from '@material-ui/core';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import CheckIcon from '@material-ui/icons/Check';

import ReactImage from '../assets/images/react.svg';
import ReactRouterImage from '../assets/images/reactRouter.svg';
import MaterialImage from '../assets/images/material.svg';
import FirebaseImage from '../assets/images/firebase.svg';
import TypeScriptImage from '../assets/images/typescript.svg';
import NodeImage from '../assets/images/node.svg';
import AwsImage from '../assets/images/aws.svg';
import DockerImgae from '../assets/images/docker.svg';
import JavaScriptImage from '../assets/images/javascript.svg';

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
    title: 'Free',
    description:
      'YouTube動画なので完全無料。無料とは思えないほどコンテンツの質が高いのでオススメ',
  },
  {
    title: 'Easy',
    description:
      'テキストよりもイメージしやすい。実際のコーディングも見れるので、色々な気付きがあるかも？',
  },
  {
    title: 'Anytime',
    description:
      '自宅での学習時間が取れないなら通勤・通学のスキマ時間を活用して学習を進めてみませんか？',
  },
];

export const TestLandingPage = () => {
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
            <Grid item style={{ marginTop: '200px' }}>
              <div>
                <Typography variant="h4" style={{ marginBottom: '20px' }}>
                  Lets Queeeest!!!!
                </Typography>
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
                  <div item>
                    <CheckIcon style={{ marginRight: '5px', color: 'green' }} />
                  </div>
                  <div item>
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
                      そんなアナタにおすすめのクエスト(動画)をPick Upしました！
                    </Typography>
                  </Grid>
                </div>
              </div>
              <Grid container spacing={2} style={{ marginTop: '20px' }}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    type="button"
                    onClick={handleGuestLogin}
                  >
                    ゲストとして使ってみる
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    type="button"
                    onClick={handleLoginPage}
                  >
                    ログインはこちら
                  </Button>
                </Grid>
              </Grid>
              <Grid item sm={1} xs={1} />
            </Grid>
            <Grid item style={{ marginTop: '100px' }}>
              <div style={{ width: 700 }}>
                <img src={Top} width="100%" />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={1} xs={1} />
      </Grid>
      <Grid container style={{ justifyContent: 'center', marginTop: '100px' }}>
        <Grid item>
          <Typography
            variant="h4"
            component="h4"
            style={{ marginBottom: '5px' }}
          >
            メリット
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={9}
        style={{ justifyContent: 'center', marginTop: '20px' }}
      >
        {cardData.map((card, index) => (
          <Grid item key={index}>
            <Card style={{ width: '400px' }}>
              <YouTubeIcon
                fontSize="large"
                style={{ marginLeft: '180px', marginTop: '10px' }}
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
          </Grid>
        ))}
      </Grid>
      <Grid container style={{ justifyContent: 'center', marginTop: '100px' }}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Typography
            variant="h4"
            component="h4"
            style={{ marginBottom: 40, textAlign: 'center' }}
          >
            現在50本以上の動画が用意されています。
          </Typography>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Grid container>
        <Grid item sm={2} xs={1} />
        <Grid item sm={8} xs={10}>
          <Swiper {...params}>
            {imageData.map((image, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <img src={image} style={{ width: '200px', height: '200px' }} />
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

// <div>
// <Grid container>
//   <Grid item sm={1} xs={1} />
//   <Grid item sm={10} xs={10}>
//     <Grid container style={{ justifyContent: 'center' }} spacing={4}>
//       <Grid item style={{ marginTop: '200px' }}>
//         <div>
//           <Typography variant="h4" style={{ marginBottom: '20px' }}>
//             Let's Queeeest!!!!
//           </Typography>
//           <div style={{ display: 'flex' }}>
//             <div>
//               <CheckIcon style={{ marginRight: '5px', color: 'green' }} />
//             </div>
//             <div>
//               <Typography variant="subtitle1">
//                 チュートリアルは終わったけど、次に何を学習したらいいのか分からない...
//               </Typography>
//             </div>
//           </div>
//           <div style={{ display: 'flex' }}>
//             <div item>
//               <CheckIcon style={{ marginRight: '5px', color: 'green' }} />
//             </div>
//             <div item>
//               <Typography variant="subtitle1">
//                 基礎は学習したけど、何を作っていいのか分からない...
//               </Typography>
//             </div>
//           </div>
//           <div style={{ display: 'flex' }}>
//             <div>
//               <CheckIcon style={{ marginRight: '5px', color: 'green' }} />
//             </div>
//             <Grid>
//               <Typography variant="subtitle1">
//                 そんなアナタにおすすめのクエスト(動画)をPick Upしました！
//               </Typography>
//             </Grid>
//           </div>
//         </div>
//         <Grid container spacing={2} style={{ marginTop: '20px' }}>
//           <Grid item>
//             <Button variant="contained" color="primary" type="button">
//               ゲストとして使ってみる
//             </Button>
//           </Grid>
//           <Grid item>
//             <Button variant="contained" color="primary" type="button">
//               ログインはこちら
//             </Button>
//           </Grid>
//         </Grid>
//       </Grid>
//       <Grid item style={{ marginTop: '100px' }}>
//         <div style={{ width: 300 }}>
//           <img src={Top} width="100%" />
//         </div>
//       </Grid>
//     </Grid>
//   </Grid>
//   <Grid item sm={1} xs={1} />
// </Grid>
// <Grid container style={{ justifyContent: 'center', marginTop: '100px' }}>
//   <Grid item>
//     <Typography
//       variant="h4"
//       component="h4"
//       style={{ marginBottom: '5px' }}
//     >
//       メリット
//     </Typography>
//   </Grid>
// </Grid>
// <Grid
//   container
//   spacing={9}
//   style={{ justifyContent: 'center', marginTop: '20px' }}
// >
//   <Grid item>
//     <Card className={classes.root} style={{ width: '400px' }}>
//       <YouTubeIcon
//         fontSize="large"
//         style={{ marginLeft: '180px', marginTop: '10px' }}
//       />
//       <CardContent style={{ textAlign: 'center' }}>
//         <Typography
//           variant="h5"
//           component="h2"
//           style={{ marginBottom: '5px' }}
//         >
//           Free
//         </Typography>
//         <Typography variant="body2" component="p">
//           YouTube動画なので完全無料。無料とは思えないほどコンテンツの質が高いのでオススメ
//         </Typography>
//       </CardContent>
//     </Card>
//   </Grid>
//   <Grid item>
//     <Card className={classes.root} style={{ width: '400px' }}>
//       <HighlightIcon
//         fontSize="large"
//         style={{ marginLeft: '180px', marginTop: '10px' }}
//       />
//       <CardContent style={{ textAlign: 'center' }}>
//         <Typography
//           variant="h5"
//           component="h2"
//           style={{ marginBottom: '5px' }}
//         >
//           Easy
//         </Typography>
//         <Typography variant="body2" component="p">
//           テキストよりもイメージしやすい。実際のコーディングも見れるので、色々な気付きがあるかも？
//         </Typography>
//       </CardContent>
//     </Card>
//   </Grid>
//   <Grid item>
//     <Card className={classes.root} style={{ width: '400px' }}>
//       <PhoneIphoneIcon
//         fontSize="large"
//         style={{ marginLeft: '180px', marginTop: '10px' }}
//       />
//       <CardContent style={{ textAlign: 'center' }}>
//         <Typography
//           variant="h5"
//           component="h2"
//           style={{ marginBottom: '5px' }}
//         >
//           Anytime
//         </Typography>
//         <Typography variant="body2" component="p">
//           自宅での学習時間が取れないなら通勤・通学のスキマ時間を活用して学習を進めてみませんか？
//         </Typography>
//       </CardContent>
//     </Card>
//   </Grid>
// </Grid>
// <Grid container style={{ justifyContent: 'center', marginTop: '100px' }}>
//   <Grid item>
//     <Typography variant="h4" component="h4" style={{ marginBottom: 40 }}>
//       現在50本以上の動画が用意されています。
//     </Typography>
//   </Grid>
// </Grid>
// <Grid container>
//   <Grid item sm={2} xs={1} />
//   <Grid item sm={8} xs={10}>
//     <Swiper {...params}>
//       {imageData.map((image, index) => (
//         <div key={index} style={{ textAlign: 'center' }}>
//           <img src={image} style={{ width: '200px', height: '200px' }} />
//         </div>
//       ))}
//     </Swiper>
//   </Grid>
//   <Grid item sm={2} xs={1} />
// </Grid>
// </div>
// );
// };

// <Grid container>
// <Grid item sm={1} xs={1} />
// <Grid container>
//   <Grid item sm={10} xs={10}>
//     <Grid container style={{ justifyContent: 'center' }} spacing={4}>
//       <Grid item style={{ marginTop: '200px' }}>
//         <div>
//           <Typography variant="h4" style={{ marginBottom: '20px' }}>
//             Let's Queeeest!!!!
//           </Typography>
//           <div style={{ display: 'flex' }}>
//             <div>
//               <CheckIcon style={{ marginRight: '5px', color: 'green' }} />
//             </div>
//             <div>
//               <Typography variant="subtitle1">
//                 チュートリアルは終わったけど、次に何を学習したらいいのか分からない...
//               </Typography>
//             </div>
//           </div>
//           <div style={{ display: 'flex' }}>
//             <div item>
//               <CheckIcon style={{ marginRight: '5px', color: 'green' }} />
//             </div>
//             <div item>
//               <Typography variant="subtitle1">
//                 基礎は学習したけど、何を作っていいのか分からない...
//               </Typography>
//             </div>
//           </div>
//           <div style={{ display: 'flex' }}>
//             <div>
//               <CheckIcon style={{ marginRight: '5px', color: 'green' }} />
//             </div>
//             <Grid>
//               <Typography variant="subtitle1">
//                 そんなアナタにおすすめのクエスト(動画)をPick Upしました！
//               </Typography>
//             </Grid>
//           </div>
//         </div>
//         <Grid container spacing={2} style={{ marginTop: '20px' }}>
//           <Grid item>
//             <Button variant="contained" color="primary" type="button">
//               ゲストとして使ってみる
//             </Button>
//           </Grid>
//           <Grid item>
//             <Button variant="contained" color="primary" type="button">
//               ログインはこちら
//             </Button>
//           </Grid>
//         </Grid>
//         <Grid item sm={1} xs={1} />
//       </Grid>
//       <Grid item style={{ marginTop: '100px' }}>
//         <div style={{ width: 300 }}>
//           <img src={Top} width="100%" />
//         </div>
//       </Grid>
//     </Grid>
//   </Grid>
// </Grid>
// <Grid container style={{ justifyContent: 'center', marginTop: '100px' }}>
//   <Grid item>
//     <Typography
//       variant="h4"
//       component="h4"
//       style={{ marginBottom: '5px' }}
//     >
//       メリット
//     </Typography>
//   </Grid>
// </Grid>
// <Grid
//   container
//   spacing={9}
//   style={{ justifyContent: 'center', marginTop: '20px' }}
// >
//   <Grid item>
//     <Card className={classes.root} style={{ width: '400px' }}>
//       <YouTubeIcon
//         fontSize="large"
//         style={{ marginLeft: '180px', marginTop: '10px' }}
//       />
//       <CardContent style={{ textAlign: 'center' }}>
//         <Typography
//           variant="h5"
//           component="h2"
//           style={{ marginBottom: '5px' }}
//         >
//           Free
//         </Typography>
//         <Typography variant="body2" component="p">
//           YouTube動画なので完全無料。無料とは思えないほどコンテンツの質が高いのでオススメ
//         </Typography>
//       </CardContent>
//     </Card>
//   </Grid>
//   <Grid item>
//     <Card className={classes.root} style={{ width: '400px' }}>
//       <HighlightIcon
//         fontSize="large"
//         style={{ marginLeft: '180px', marginTop: '10px' }}
//       />
//       <CardContent style={{ textAlign: 'center' }}>
//         <Typography
//           variant="h5"
//           component="h2"
//           style={{ marginBottom: '5px' }}
//         >
//           Easy
//         </Typography>
//         <Typography variant="body2" component="p">
//           テキストよりもイメージしやすい。実際のコーディングも見れるので、色々な気付きがあるかも？
//         </Typography>
//       </CardContent>
//     </Card>
//   </Grid>
//   <Grid item>
//     <Card className={classes.root} style={{ width: '400px' }}>
//       <PhoneIphoneIcon
//         fontSize="large"
//         style={{ marginLeft: '180px', marginTop: '10px' }}
//       />
//       <CardContent style={{ textAlign: 'center' }}>
//         <Typography
//           variant="h5"
//           component="h2"
//           style={{ marginBottom: '5px' }}
//         >
//           Anytime
//         </Typography>
//         <Typography variant="body2" component="p">
//           自宅での学習時間が取れないなら通勤・通学のスキマ時間を活用して学習を進めてみませんか？
//         </Typography>
//       </CardContent>
//     </Card>
//   </Grid>
// </Grid>
// <Grid container style={{ justifyContent: 'center', marginTop: '100px' }}>
//   <Grid item xs={1} />
//   <Grid item xs={10}>
//     <Typography variant="h4" component="h4" style={{ marginBottom: 40 }}>
//       現在50本以上の動画が用意されています。
//     </Typography>
//   </Grid>
//   <Grid item xs={1} />
// </Grid>
// <Grid container>
//   <Grid item sm={2} xs={1} />
//   <Grid item sm={8} xs={10}>
//     <Swiper {...params}>
//       {imageData.map((image, index) => (
//         <div key={index} style={{ textAlign: 'center' }}>
//           <img src={image} style={{ width: '200px', height: '200px' }} />
//         </div>
//       ))}
//     </Swiper>
//   </Grid>
//   <Grid item sm={2} xs={1} />
// </Grid>
// <Grid item sm={1} xs={1} />
// </Grid>

// <Grid
// container
// spacing={9}
// style={{ justifyContent: 'center', marginTop: '20px' }}
// >
// // <Grid item>
// //   <Card className={classes.root} style={{ width: '400px' }}>
// //     <YouTubeIcon
//       fontSize="large"
//       style={{ marginLeft: '180px', marginTop: '10px' }}
//     />
//     <CardContent style={{ textAlign: 'center' }}>
//       <Typography
//         variant="h5"
//         component="h2"
//         style={{ marginBottom: '5px' }}
//       >
//         Free
//       </Typography>
//       <Typography variant="body2" component="p">
//         YouTube動画なので完全無料。無料とは思えないほどコンテンツの質が高いのでオススメ
//       </Typography>
//     </CardContent>
//   </Card>
// </Grid>
// <Grid item>
//   <Card className={classes.root} style={{ width: '400px' }}>
//     <HighlightIcon
//       fontSize="large"
//       style={{ marginLeft: '180px', marginTop: '10px' }}
//     />
//     <CardContent style={{ textAlign: 'center' }}>
//       <Typography
//         variant="h5"
//         component="h2"
//         style={{ marginBottom: '5px' }}
//       >
//         Easy
//       </Typography>
//       <Typography variant="body2" component="p">
//         テキストよりもイメージしやすい。実際のコーディングも見れるので、色々な気付きがあるかも？
//       </Typography>
//     </CardContent>
//   </Card>
// </Grid>
// <Grid item>
//   <Card className={classes.root} style={{ width: '400px' }}>
//     <PhoneIphoneIcon
//       fontSize="large"
//       style={{ marginLeft: '180px', marginTop: '10px' }}
//     />
//     <CardContent style={{ textAlign: 'center' }}>
//       <Typography
//         variant="h5"
//         component="h2"
//         style={{ marginBottom: '5px' }}
//       >
//         Anytime
//       </Typography>
//       <Typography variant="body2" component="p">
//         自宅での学習時間が取れないなら通勤・通学のスキマ時間を活用して学習を進めてみませんか？
//       </Typography>
//     </CardContent>
//   </Card>
// </Grid>
// </Grid>
