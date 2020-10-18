import React, { useState } from "react";
import ReactPlayer from "react-player";
import Checkbox from "@material-ui/core/Checkbox";
import videos from "../videos/MaterialUIVideo";

const MaterialUIVideo = (props) => {
  const [isFinished, setFinished] = useState(false);
  const { id } = props.match.params;
  const matchedVideo = videos.filter((video) => video.id == id);
  console.log(matchedVideo[0].url);
  return (
    <div>
      <span>Completed:</span>
      <Checkbox
        checked={isFinished}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <p>{id}</p>
      <ReactPlayer
        controls
        onEnded={() => setFinished(true)}
        url={matchedVideo[0].url}
      />
    </div>
  );
};

export default MaterialUIVideo;
