import React, { useContext } from "react";
import ReactPlayer from "react-player";
import Checkbox from "@material-ui/core/Checkbox";
import VideoContext from "../context/video-context";
import firebase from "../firebase/firebase.util";
import Typography from "@material-ui/core/Typography";

const ReactRouterVideo = (props) => {
  const { RRVideo, setRRVideo, currentUser } = useContext(VideoContext);
  const { id } = props.match.params;
  const matchedVideo = RRVideo.filter((video) => video.id == id);

  const firestore = firebase.firestore();

  const playerStyle = {
    marginBottom: "25px",
  };

  const handelLoginUserToggle = (id) => {
    const newItems = RRVideo.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setRRVideo(newItems);
    firestore
      .collection("users")
      .doc(currentUser)
      .update({ RRVideo: [...newItems] });
  };
  return (
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
  );
};

export default ReactRouterVideo;
