import React, { useEffect, useState } from "react";
import youtube from "../api/youtube";

const App = () => {
  const [video, setVideo] = useState([]);

  const fetchData = async () => {
    const response = await youtube.get("search", {
      params: { q: "プログラミング" },
    });
    console.log(response);
    setVideo(response.data.items);
    console.log(video);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(video);

  return (
    <div>
      {video.map((v, index) => {
        return (
          <div key={index}>
            <iframe src={`https://www.youtube.com/embed/${v.id.videoId}`} />
            <img src={v.snippet.thumbnails.medium.url} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
