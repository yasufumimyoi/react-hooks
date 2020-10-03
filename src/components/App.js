import React, { useEffect, useState } from "react";
import Header from "./Header";
import VideoList from "./VidoeList";
import Loading from "./Loading";
import youtube from "../api/youtube";

import { Grid } from "@material-ui/core";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const response = await youtube.get("search", {
      params: { q: "Japanese" },
    });
    setVideos(response.data.items);
    setLoading(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid container>
        <Grid item sm={1} />
        <Grid item xs={12} sm={10}>
          <Grid container>
            {loading ? (
              videos.map((video) => (
                <VideoList key={video.id.videoId} video={video} />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </Grid>
          <Grid item sm={1} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
