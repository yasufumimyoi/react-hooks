import React, { useContext } from "react";
import ReactPlayer from "react-player";
import {
  Checkbox,
  CircularProgress,
  Typography,
  Grid,
} from "@material-ui/core";
import { VideoContext } from "../context/video-context";
import firebase from "../firebase/firebase.util";
import "../style/player.css";

const ReactVideo = (props) => {
  const { RVideo, setRVideo, currentUser, guestUser } = useContext(
    VideoContext
  );

  const firestore = firebase.firestore();

  //paramsと動画IDが合致した動画データを抽出する
  const { id } = props.match.params;
  const parsedId = parseInt(id);
  const matchedVideo = RVideo.filter((video) => video.id === parsedId);

  //動画視聴後にこのメソッドが呼ばれてcompletedにチェックが付く
  const saveCompletedStatus = (id) => {
    const newItems = RVideo.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setRVideo(newItems);

    if (currentUser.isAnonymous === false || guestUser.isAnonymous === false) {
      firestore
        .collection("users")
        .doc(currentUser.uid)
        .update({ react: [...newItems] });
    } else {
      console.log("Guest user data updated");
      sessionStorage.setItem("react", JSON.stringify(newItems));
    }
  };

  return (
    <div>
      {matchedVideo.length === 0 ? (
        <CircularProgress />
      ) : (
        <Grid container>
          <Grid itm sm={2} />
          <Grid item sm={8}>
            <div className="film_container" style={{ padding: "30px" }}>
              <div className="film_box">
                <div className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    controls
                    onEnded={() => saveCompletedStatus(matchedVideo[0].id)}
                    url={matchedVideo[0].url}
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
              <Typography variant="h6" component="h6">
                {matchedVideo[0].title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="span"
              >
                Completed:
              </Typography>
              <Checkbox
                checked={matchedVideo[0].completed}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </div>
          </Grid>
          <Grid itm sm={2} />
        </Grid>
      )}
    </div>
  );
};

export { ReactVideo };
