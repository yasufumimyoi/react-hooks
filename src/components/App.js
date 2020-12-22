import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from '../AppRoutes';
import { VideoContext } from '../contexts/video-context';
import { firebase } from '../firebase/firebase.util';
import { ScrollToTop } from './Scroll';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../style/theme';

const App = () => {
  const [AWVideo, setAWVideo] = useState([]);
  const [DVideo, setDVideo] = useState([]);
  const [FVideo, setFVideo] = useState([]);
  const [JVideo, setJVideo] = useState([]);
  const [MVideo, setMVideo] = useState([]);
  const [NVideo, setNVideo] = useState([]);
  const [RVideo, setRVideo] = useState([]);
  const [RRVideo, setRRVideo] = useState([]);
  const [TVideo, setTVideo] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [guestUser, setGuestUser] = useState(null);
  const [operationType, setOperationType] = useState(null);

  //既存ユーザーのログイン処理
  const existingUserLogin = async (user) => {
    console.log(user);
    setCurrentUser(user);
    const videos = await firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .get();
    try {
      if (videos) {
        console.log('videos', videos);
        console.log('aws', videos.data().aws);
        setAWVideo(videos.data().aws);
        setDVideo(videos.data().docker);
        setFVideo(videos.data().firebase);
        setJVideo(videos.data().javascript);
        setMVideo(videos.data().material);
        setNVideo(videos.data().node);
        setRVideo(videos.data().react);
        setRRVideo(videos.data().router);
        setTVideo(videos.data().typescript);
      }
    } catch (error) {
      //誤って新規ユーザーがログインを行った時の例外処理
      console.error(error.message);
      setCurrentUser(user);
      const videos = await firebase.firestore().collection('videos').get();
      let videoData = [];
      if (videos) {
        videos.forEach((video) => {
          let data = video.data();
          videoData.push({ ...data });
        });
      }
      await firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .set({
          aws: [...videoData[0].aws],
          docker: [...videoData[1].docker],
          firebase: [...videoData[2].firebase],
          javascript: [...videoData[3].javascript],
          material: [...videoData[4].material],
          node: [...videoData[5].node],
          react: [...videoData[6].react],
          router: [...videoData[7].router],
          typescript: [...videoData[8].typescript],
        });
      setAWVideo(videoData[0].aws);
      setDVideo(videoData[1].docker);
      setFVideo(videoData[2].firebase);
      setJVideo(videoData[3].javascript);
      setMVideo(videoData[4].material);
      setNVideo(videoData[5].node);
      setRVideo(videoData[6].react);
      setRRVideo(videoData[7].router);
      setTVideo(videoData[8].typescript);
      console.log('seiko');
    }
  };

  //匿名ユーザーのログイン処理
  const anonymousLogin = async (user) => {
    setCurrentUser(user);
    setGuestUser(user);
    const videos = await firebase.firestore().collection('videos').get();
    let videoData = [];
    if (videos) {
      videos.forEach((video) => {
        let data = video.data();
        videoData.push({ ...data });
      });
    }
    //匿名ユーザーがセッション中に動画を視聴していた場合の処理
    if (sessionStorage.length > 1) {
      if (sessionStorage.getItem('aws')) {
        let data = sessionStorage.getItem('aws');
        setAWVideo(JSON.parse(data));
      } else {
        setAWVideo(videoData[0].aws);
      }
      if (sessionStorage.getItem('docker')) {
        let data = sessionStorage.getItem('docker');
        setDVideo(JSON.parse(data));
      } else {
        setDVideo(videoData[1].docker);
      }
      if (sessionStorage.getItem('firebase')) {
        let data = sessionStorage.getItem('firebase');
        setFVideo(JSON.parse(data));
      } else {
        setFVideo(videoData[2].firebase);
      }
      if (sessionStorage.getItem('javascript')) {
        let data = sessionStorage.getItem('javascript');
        setJVideo(JSON.parse(data));
      } else {
        setJVideo(videoData[3].javascript);
      }
      if (sessionStorage.getItem('material')) {
        let data = sessionStorage.getItem('material');
        setMVideo(JSON.parse(data));
      } else {
        setMVideo(videoData[4].material);
      }
      if (sessionStorage.getItem('node')) {
        let data = sessionStorage.getItem('node');
        setNVideo(JSON.parse(data));
      } else {
        setNVideo(videoData[5].node);
      }
      if (sessionStorage.getItem('react')) {
        let data = sessionStorage.getItem('react');
        setRVideo(JSON.parse(data));
      } else {
        setRVideo(videoData[6].react);
      }
      if (sessionStorage.getItem('router')) {
        let data = sessionStorage.getItem('router');
        setRRVideo(JSON.parse(data));
      } else {
        setRRVideo(videoData[7].router);
      }
      if (sessionStorage.getItem('typescript')) {
        let data = sessionStorage.getItem('typescript');
        setTVideo(JSON.parse(data));
      } else {
        setTVideo(videoData[8].typescript);
      }
    } else {
      setAWVideo(videoData[0].aws);
      setDVideo(videoData[1].docker);
      setFVideo(videoData[2].firebase);
      setJVideo(videoData[3].javascript);
      setMVideo(videoData[4].material);
      setNVideo(videoData[5].node);
      setRVideo(videoData[6].react);
      setRRVideo(videoData[7].router);
      setTVideo(videoData[8].typescript);
    }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('スタート');
        if (user.isAnonymous === false) {
          existingUserLogin(user);
          console.log('既存');
        } else {
          anonymousLogin(user);
          console.log('匿名');
        }
      }
    });
  }, []);

  return (
    <VideoContext.Provider
      value={{
        AWVideo,
        DVideo,
        FVideo,
        JVideo,
        MVideo,
        NVideo,
        RVideo,
        RRVideo,
        TVideo,
        currentUser,
        guestUser,
        setAWVideo,
        setDVideo,
        setFVideo,
        setJVideo,
        setMVideo,
        setNVideo,
        setRVideo,
        setRRVideo,
        setTVideo,
        setCurrentUser,
        setGuestUser,
        operationType,
        setOperationType,
      }}
    >
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop />
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </VideoContext.Provider>
  );
};

export { App };
