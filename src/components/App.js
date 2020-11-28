import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Contents } from "./Contents";
import { Grid } from "@material-ui/core";
import { Header } from "./Header";
import { LandingPage } from "./LandingPage";
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

    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     setCurrentUser(user);
    //     const userRef = firebase.firestore().collection("users");
    //     userRef.get().then((snapShot) => {
    //       let temp = [];
    //       snapShot.forEach((doc) => {
    //         temp.push(doc.id);
    //       });
    //       let isChecked = temp.filter((id) => id == user.uid);
    //       if (isChecked.length > 0) {
    //         console.log("Ex User");
    //         firebase
    //           .firestore()
    //           .collection("users")
    //           .doc(user.uid)
    //           .get()
    //           .then((video) => {
    //             if (video.exists) {
    //               setMVideo(video.data().material);
    //               setRVideo(video.data().react);
    //               setRRVideo(video.data().router);
    //               console.log("Login");
    //             }
    //           });
    //       } else if (user.isAnonymous) {
    //         console.log("Guest User");
    //         setGuestUser(user);
    //         firebase
    //           .firestore()
    //           .collection("videos")
    //           .get()
    //           .then((video) => {
    //             let temp = [];
    //             video.forEach((info) => {
    //               let data = info.data();
    //               temp.push({ ...data });
    //             });
    //             if (sessionStorage.length > 1) {
    //               console.log("sessionから取得");
    //               console.log(sessionStorage.length);
    //               console.log(sessionStorage);
    //               if (sessionStorage.getItem("react")) {
    //                 let dataR = sessionStorage.getItem("react");
    //                 setRVideo(JSON.parse(dataR));
    //               } else {
    //                 setRVideo(temp[1].react);
    //               }
    //               if (sessionStorage.getItem("router")) {
    //                 let dataRR = sessionStorage.getItem("router");
    //                 setRRVideo(JSON.parse(dataRR));
    //               } else {
    //                 setRRVideo(temp[2].router);
    //               }
    //               if (sessionStorage.getItem("material")) {
    //                 let dataM = sessionStorage.getItem("material");
    //                 setMVideo(JSON.parse(dataM));
    //               } else {
    //                 setMVideo(temp[0].material);
    //               }
    //             } else {
    //               setMVideo(temp[0].material);
    //               setRVideo(temp[1].react);
    //               setRRVideo(temp[2].router);
    //             }
    //           });
    //       } else if (isChecked == 0) {
    //         console.log("First Time");
    //         firebase
    //           .firestore()
    //           .collection("videos")
    //           .get()
    //           .then((video) => {
    //             let temp = [];
    //             video.forEach((info) => {
    //               let data = info.data();
    //               console.log(data);
    //               temp.push({ ...data });
    //             });
    //             console.log(temp);
    //             setMVideo(temp[0].material);
    //             setRVideo(temp[1].react);
    //             setRRVideo(temp[2].router);
    //             firebase.firestore().collection("users").doc(user.uid).set({
    //               material: temp[0].material,
    //               react: temp[1].react,
    //               router: temp[2].router,
    //             });
    //           });
    //       }
    //     });
    //   } else {
    //     console.log("Non Auth User");
    //   }
    // });
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
        <Grid container direction="column">
          <Grid item>
            <Header />
          </Grid>
          <Grid container>
            <Grid item sm={2} />
            <Grid item xs={12} sm={8}>
              <Grid container>
                {!currentUser ? <LandingPage /> : <Contents />}
              </Grid>
              <Grid item sm={2} />
            </Grid>
          </Grid>
        </Grid>
      </Router>
    </VideoContext.Provider>
  );
};

export { App };
