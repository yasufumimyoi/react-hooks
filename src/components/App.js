import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Contents } from './Contents';
import { VideoContext } from '../context/video-context';
import firebase from '../firebase/firebase.util';
import { ScrollToTop } from './Scroll';

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

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (user.isAnonymous === false) {
          setCurrentUser(user);
          firebase
            .firestore()
            .collection('users')
            .doc(user.uid)
            .get()
            .then((video) => {
              if (video.exists) {
                setAWVideo(video.data().aws);
                setDVideo(video.data().docker);
                setFVideo(video.data().firebase);
                setJVideo(video.data().javascript);
                setMVideo(video.data().material);
                setNVideo(video.data().node);
                setRVideo(video.data().react);
                setRRVideo(video.data().router);
                setTVideo(video.data().typescript);
              } else {
                firebase
                  .firestore()
                  .collection('users')
                  .doc(user.uid)
                  .set({
                    aws: [],
                    dcoker: [],
                    firebase: [],
                    javascript: [],
                    material: [],
                    node: [],
                    react: [],
                    router: [],
                    typescript: [],
                  })
                  .then(() => {
                    //Batch処理にしたい
                    firebase
                      .firestore()
                      .collection('videos')
                      .get()
                      .then((video) => {
                        let videoData = [];
                        video.forEach((info) => {
                          let data = info.data();
                          videoData.push({ ...data });
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
                        firebase
                          .firestore()
                          .collection('users')
                          .doc(user.uid)
                          .update({ aws: [...videoData[0].aws] });
                        firebase
                          .firestore()
                          .collection('users')
                          .doc(user.uid)
                          .update({ docker: [...videoData[1].docker] });
                        firebase
                          .firestore()
                          .collection('users')
                          .doc(user.uid)
                          .update({ firebase: [...videoData[2].firebase] });
                        firebase
                          .firestore()
                          .collection('users')
                          .doc(user.uid)
                          .update({ javascript: [...videoData[3].javascript] });
                        firebase
                          .firestore()
                          .collection('users')
                          .doc(user.uid)
                          .update({ material: [...videoData[4].material] });
                        firebase
                          .firestore()
                          .collection('users')
                          .doc(user.uid)
                          .update({ node: [...videoData[5].node] });
                        firebase
                          .firestore()
                          .collection('users')
                          .doc(user.uid)
                          .update({ react: [...videoData[6].react] });
                        firebase
                          .firestore()
                          .collection('users')
                          .doc(user.uid)
                          .update({ router: [...videoData[7].router] });
                        firebase
                          .firestore()
                          .collection('users')
                          .doc(user.uid)
                          .update({ typescript: [...videoData[8].typescript] });
                        console.log('updated');
                      });
                  });
              }
            });
          //匿名ユーザー
        } else if (user.isAnonymous === true) {
          setCurrentUser(user);
          setGuestUser(user);
          firebase
            .firestore()
            .collection('videos')
            .get()
            .then((video) => {
              let videoData = [];
              video.forEach((info) => {
                let data = info.data();
                videoData.push({ ...data });
              });
              //匿名ユーザーかつ既に動画視聴済動画があるかどうかのチェック
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
            });
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
      }}
    >
      <Router>
        <ScrollToTop />
        <Contents />
      </Router>
    </VideoContext.Provider>
  );
};

export { App };
