import React, { useContext } from "react";
import ReactPlayer from "react-player";
import Checkbox from "@material-ui/core/Checkbox";
import VideoContext from "../context/video-context";
import firebase from "../firebase/firebase.util";

const MaterialUIVideo = (props) => {
  const { MVideo, setMVideo, user } = useContext(VideoContext);
  const { id } = props.match.params;
  const matchedVideo = MVideo.filter((video) => video.id == id);

  const firestore = firebase.firestore();

  // const handelToggle = (id) => {
  //   const newItems = MVideo.map((item) => {
  //     if (item.id === id) {
  //       item.completed = !item.completed;
  //     }
  //     return item;
  //   });
  //   setMVideo(newItems);
  //   firestore
  //     .collection("videos")
  //     .doc("materialUI")
  //     .set({ material: [...newItems] });
  // };

  const handelLoginUserToggle = (id) => {
    const newItems = MVideo.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setMVideo(newItems);
    firestore
      .collection("users")
      .doc(user)
      .update({ MVideo: [...newItems] });
  };

  return (
    <div>
      <ReactPlayer
        controls
        onEnded={() => handelLoginUserToggle(matchedVideo[0].id)}
        url={matchedVideo[0].url}
        width="1200px"
        height="700px"
      />
      <p>{matchedVideo[0].title}</p>
      <span>Completed:</span>
      <Checkbox
        checked={matchedVideo[0].completed}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
};

export default MaterialUIVideo;
