import React, { useState, useEffect } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Grid } from "@material-ui/core";

import Header from "./Header";
import Contents from "./Contents";
import VideoContext from "../context/video-context";
import firebase from "../firebase/firebase.util";
import LandingPage from "./LandingPage";

const App = () => {
  const [MVideo, setMVideo] = useState([]);
  const [RVideo, setRVideo] = useState([]);
  const [RRVideo, setRRVideo] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user.uid);
        const userRef = firebase.firestore().collection("users");
        userRef.get().then((snapShot) => {
          let temp = [];
          snapShot.forEach((doc) => {
            temp.push(doc.id);
          });
          let isChecked = temp.filter((id) => id == user.uid);
          if (isChecked.length > 0) {
            console.log("Ex User");
            firebase
              .firestore()
              .collection("users")
              .doc(user.uid)
              .get()
              .then((video) => {
                if (video.exists) {
                  setMVideo(video.data().MVideo);
                  setRVideo(video.data().RVideo);
                  setRRVideo(video.data().RRVideo);
                  console.log("Login");
                }
              });
          } else if (user.isAnonymous) {
            console.log("Guest User");
            firebase
              .firestore()
              .collection("videos")
              .get()
              .then((video) => {
                let temp = [];
                video.forEach((info) => {
                  let data = info.data();
                  console.log(data);
                  temp.push({ ...data });
                });
                setMVideo(temp[0].material);
                setRVideo(temp[1].react);
                setRRVideo(temp[2].router);
                console.log(temp[0].material);
                firebase
                  .firestore()
                  .collection("AnonymousUsers")
                  .doc(user.uid)
                  .set({
                    MVideo: temp[0].material,
                    RVideo: temp[1].react,
                    RRVideo: temp[2].router,
                  });
              });
          }
        });
      } else {
        console.log("Non Auth User");
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

export default App;
