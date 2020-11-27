import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { Checkbox, CircularProgress, Typography } from "@material-ui/core";
import { VideoContext } from "../context/video-context";
import firebase from "../firebase/firebase.util";

const MaterialUIVideo = (props) => {
  const { MVideo, setMVideo, currentUser, guestUser } = useContext(
    VideoContext
  );
  const { id } = props.match.params;
  const matchedVideo = MVideo.filter((video) => video.id == id);
  const firestore = firebase.firestore();
  const playerStyle = {
    marginBottom: "25px",
  };

  const handelLoginUserToggle = (id) => {
    const newItems = MVideo.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setMVideo(newItems);

    if (currentUser.isAnonymous == false) {
      firestore
        .collection("users")
        .doc(currentUser.uid)
        .update({ material: [...newItems] });
    } else if (guestUser.isAnonymous == false) {
      firestore
        .collection("users")
        .doc(currentUser.uid)
        .update({ material: [...newItems] });
    } else {
      console.log("Guest user data updated");
      sessionStorage.setItem("material", JSON.stringify(newItems));
      let data = sessionStorage.getItem("material");
      console.log(JSON.parse(data));
    }
  };

  return (
    <div>
      {matchedVideo.length == 0 ? (
        <CircularProgress />
      ) : (
        <div>
          <ReactPlayer
            controls
            onEnded={() => handelLoginUserToggle(matchedVideo[0].id)}
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

export { MaterialUIVideo };
