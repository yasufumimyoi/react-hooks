import React, { useState, useEffect, FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { VideoContext } from './contexts/video-context';
import { firebase } from './firebase/firebase.util';
import { ScrollToTop } from './components/Video/Scroll';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './style/theme';
import { vData } from './assets/videos/VideoData';
import { VideoProps } from './types/types';

const App: FC = () => {
  const [currentUser, setCurrentUser] = useState<unknown>(null);
  const [guestUser, setGuestUser] = useState<unknown>(null);
  const [videoResults, setVideoResults] = useState<any>([]);
  const [allVideo, setAllVideo] = useState<any>([]);
  const [userData, setUserData] = useState<unknown | []>([]);

  // //動画データを取得し、動画データをセットする
  const obtainVideoData = async (user: any) => {
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
        const videos: Array<VideoProps | []> = [];
        //const vData = await firebase.firestore().collection('videoData').get();
        await vData.forEach((video) => {
          const docName = video.id;
          const id = video.id;
          const category = video.category;
          const image = video.image;
          const title = video.title;
          const url = video.url;
          const completed = video.completed;
          const path = video.path;
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
        const videos: any = [];
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
  const obtainUserProfile = async (user: any) => {
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
        const userProfile: Array<unknown | []> = [];
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
