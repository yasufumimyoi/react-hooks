import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import ReactPlayer from "react-player";

const VideoList = () => {
  const [isFinished, setFinished] = useState(false);

  const handleChange = () => {
    setFinished(true);
  };

  return (
    <div>
      <ReactPlayer
        controls
        onEnded={() => setFinished(true)}
        url="https://www.youtube.com/watch?v=7sDY4m8KNLc"
      />
      <Checkbox
        checked={isFinished}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
};

export default VideoList;
