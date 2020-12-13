import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Contents } from "./Contents";
import { VideoContext } from "../context/video-context";
import firebase from "../firebase/firebase.util";

const App = () => {
  //Todo まだ追加していない動画をuseStateさせる
  const [MVideo, setMVideo] = useState([]);
  const [RVideo, setRVideo] = useState([]);
  const [RRVideo, setRRVideo] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [guestUser, setGuestUser] = useState(null);
  const [isNewUser, setNewUser] = useState(false);

  //Todo consoleを削除させる
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (user.isAnonymous === false) {
          setCurrentUser(user);
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
              } else {
                firebase
                  .firestore()
                  .collection("users")
                  .doc(user.uid)
                  .set({
                    material: [],
                    react: [],
                    router: [],
                  })
                  .then(() => {
                    //Batch処理にしたい
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
                        setMVideo(videoData[0].material);
                        setRVideo(videoData[1].react);
                        setRRVideo(videoData[2].router);
                        firebase
                          .firestore()
                          .collection("users")
                          .doc(user.uid)
                          .update({ material: [...videoData[0].material] });
                        firebase
                          .firestore()
                          .collection("users")
                          .doc(user.uid)
                          .update({ react: [...videoData[1].react] });
                        firebase
                          .firestore()
                          .collection("users")
                          .doc(user.uid)
                          .update({ router: [...videoData[2].router] });
                        console.log("updated");
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
            .collection("videos")
            .get()
            .then((video) => {
              let videoData = [];
              video.forEach((info) => {
                let data = info.data();
                videoData.push({ ...data });
              });
              //Todo 追加した動画たちも追加する
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
        setNewUser,
      }}
    >
      <Router>
        <Contents />
      </Router>
    </VideoContext.Provider>
  );
};

export { App };
