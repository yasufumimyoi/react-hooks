import React, { useState } from "react";
import videos from "./VideoInfo";
import { useHistory, Link } from "react-router-dom";

const MaterialUITest2 = () => {
  const history = useHistory();

  const handleRouter = (path) => {
    history.push(path);
  };

  return (
    <div>
      {videos.map((video) => (
        <div>
          <img src={video.image} onClick={() => handleRouter(video.path)} />
          <p>{video.title}</p>
        </div>
      ))}
    </div>
  );
};

export default MaterialUITest2;
