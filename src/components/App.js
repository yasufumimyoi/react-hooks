import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from '../AppRoutes';
import { VideoContext } from '../contexts/video-context';
import { firebase } from '../firebase/firebase.util';
import { ScrollToTop } from './Scroll';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../style/theme';
import { vData } from '../assets/videos/VideoData';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [guestUser, setGuestUser] = useState(null);
  const [videoResults, setVideoResults] = useState([]);
  const [allVideo, setAllVideo] = useState([]);
  const [userData, setUserData] = useState([]);

  // //動画データを取得し、動画データをセットする
  const obtainVideoData = async (user) => {
    try {
      //既に動画コレクションを持っているか確認
      const dataRef = await firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .collection('videos')
        .get();
      //未登録ユーザーのみ、新規の動画データをセットする
      if (dataRef.empty) {
        let videos = [];
        //const vData = await firebase.firestore().collection('videoData').get();
        await vData.forEach((video) => {
          let docName = video.id;
          let id = video.id;
          let category = video.category;
          let image = video.image;
          let title = video.title;
          let url = video.url;
          let completed = video.completed;
          let path = video.path;
          videos.push(video);
          firebase
            .firestore()
            .collection('users')
            .doc(user.uid)
            .collection('videos')
            .doc(docName)
            .set({ id, category, image, title, url, completed, path });
          setAllVideo(videos);
          setVideoResults(videos);
        });
      } else {
        //動画データを取得し、useStateにセットする
        let videos = [];
        await dataRef.forEach((doc) => {
          videos.push(doc.data());
        });
        setAllVideo(videos);
        setVideoResults(videos);
      }
    } catch (error) {
      //handle exception
    }
  };

  //ユーザーのプロフィール情報をセットする
  const obtainUserProfile = async (user) => {
    try {
      //既にプロフィールデータを持っているか確認
      const dataRef = await firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .collection('profile')
        .get();
      //未登録ユーザーのみ、デフォルトのプロフィールデータをセットする
      if (dataRef.empty) {
        const imageRef = firebase.storage().ref().child('user.png');
        const image = await imageRef.getDownloadURL();
        await firebase
          .firestore()
          .collection('users')
          .doc(user.uid)
          .collection('profile')
          .doc('details')
          .set({
            name: 'コードネーム',
            gender: '性別',
            message: '自己紹介',
            image: image,
          });
        setUserData([
          {
            name: 'コードネーム',
            gender: '性別',
            message: '自己紹介',
            image: image,
          },
        ]);
      } else {
        let userProfile = [];
        const data = await firebase
          .firestore()
          .collection('users')
          .doc(user.uid)
          .collection('profile')
          .get();
        data.forEach((profile) => {
          userProfile.push(profile.data());
        });
        setUserData(userProfile);
      }
    } catch (error) {
      console.error(error.message);
      //handle exception...
    }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        //匿名ユーザーでログイン
        if (user.isAnonymous) {
          setGuestUser(user);
          setCurrentUser(user);
          obtainVideoData(user);
          obtainUserProfile(user);
        } else {
          //既存ユーザーでログイン
          setCurrentUser(user);
          obtainVideoData(user);
          obtainUserProfile(user);
        }
      }
    });
  }, []);

  return (
    <VideoContext.Provider
      value={{
        allVideo,
        currentUser,
        guestUser,
        videoResults,
        userData,
        setAllVideo,
        setCurrentUser,
        setGuestUser,
        setVideoResults,
        setUserData,
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
