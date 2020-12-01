import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Contents } from "./Contents";
import { VideoContext } from "../context/video-context";
import firebase from "../firebase/firebase.util";

const App = () => {
  const [MVideo, setMVideo] = useState([]);
  const [RVideo, setRVideo] = useState([]);
  const [RRVideo, setRRVideo] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [guestUser, setGuestUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        //登録済ユーザー
        if (user.isAnonymous === false) {
          setCurrentUser(user);
          console.log("既存ユーザーログイン");
          firebase
            .firestore()
            .collection("users")
            .doc(user.uid)
            .get()
            .then((video) => {
              if (video.exists) {
                setMVideo(video.data().material);
                setRVideo(video.data().react);
                setRRVideo(video.data().router);
                console.log("既存ユーザーデータセット");
              }
            });
          //匿名ユーザー
        } else if (user.isAnonymous === true) {
          setCurrentUser(user);
          setGuestUser(user);
          console.log("匿名ユーザーログイン");
          firebase
            .firestore()
            .collection("videos")
            .get()
            .then((video) => {
              let videoData = [];
              video.forEach((info) => {
                let data = info.data();
                videoData.push({ ...data });
              });
              //匿名ユーザーかつ既に動画視聴済動画があるかどうかのチェック
              if (sessionStorage.length > 1) {
                if (sessionStorage.getItem("react")) {
                  let data = sessionStorage.getItem("react");
                  setRVideo(JSON.parse(data));
                } else {
                  setRVideo(videoData[1].react);
                }
                if (sessionStorage.getItem("router")) {
                  let data = sessionStorage.getItem("router");
                  setRVideo(JSON.parse(data));
                } else {
                  setRRVideo(videoData[2].router);
                }
                if (sessionStorage.getItem("material")) {
                  let data = sessionStorage.getItem("material");
                  setMVideo(JSON.parse(data));
                } else {
                  setMVideo(videoData[0].material);
                }
              } else {
                setMVideo(videoData[0].material);
                setRVideo(videoData[1].react);
                setRRVideo(videoData[2].router);
              }
            });
        }
      } else {
        console.log("未ログイン状態");
      }
    });
  }, []);

  return (
    <VideoContext.Provider
      value={{
        MVideo,
        setMVideo,
        RVideo,
        setRVideo,
        RRVideo,
        setRRVideo,
        currentUser,
        setCurrentUser,
        guestUser,
        setGuestUser,
      }}
    >
      <Router>
        <Contents />
      </Router>
    </VideoContext.Provider>
  );
};

export { App };
