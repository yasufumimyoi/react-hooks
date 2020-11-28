import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { Checkbox, CircularProgress, Typography } from "@material-ui/core";
import { VideoContext } from "../context/video-context";
import firebase from "../firebase/firebase.util";

const ReactRouterVideo = (props) => {
  const { RRVideo, setRRVideo, currentUser, guestUser } = useContext(
    VideoContext
  );

  const firestore = firebase.firestore();
  const playerStyle = {
    marginBottom: "25px",
  };

  //paramsと動画IDが合致した動画データを抽出する
  const { id } = props.match.params;
  const parsedId = parseInt(id);
  const matchedVideo = RRVideo.filter((video) => video.id === parsedId);

  //動画視聴後にこのメソッドが呼ばれてcompletedにチェックが付く
  const saveCompletedStatus = (id) => {
    const newItems = RRVideo.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setRRVideo(newItems);
    if (currentUser.isAnonymous === false || guestUser.isAnonymous === false) {
      firestore
        .collection("users")
        .doc(currentUser.uid)
        .update({ router: [...newItems] });
    } else {
      console.log("Guest user data updated");
      sessionStorage.setItem("router", JSON.stringify(newItems));
    }
  };
  return (
    <div>
      {matchedVideo.length === 0 ? (
        <CircularProgress />
      ) : (
        <div>
          <ReactPlayer
            controls
            onEnded={() => saveCompletedStatus(matchedVideo[0].id)}
            url={matchedVideo[0].url}
            width="1200px"
            height="700px"
            style={playerStyle}
          />
          <Typography variant="h6" component="h6">
            {matchedVideo[0].title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="span">
            Completed:
          </Typography>
          <Checkbox
            checked={matchedVideo[0].completed}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>
      )}
    </div>
  );
};

export { ReactRouterVideo };
