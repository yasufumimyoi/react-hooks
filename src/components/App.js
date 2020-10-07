import React, { useEffect, useState } from "react";
import Header from "./Header";
import Loading from "./Loading";
import youtube from "../api/youtube";

import { Grid } from "@material-ui/core";
import Contents from "./Contents";
import { BrowserRouter as Router } from "react-router-dom";
import VideoContext from "../context/video-contex";
import VideoList from "./VidoeList";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [test, setTest] = useState("hello");

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

  console.log(videos);

  return (
    <VideoContext.Provider value={{ videos, test }}>
      <Router>
        <Grid container direction="column">
          <Grid item>
            <Header />
          </Grid>
          <Grid container>
            <Grid item sm={1} />
            <Grid item xs={12} sm={10}>
              <Grid container>
                {loading ? <Contents /> : <p>Loading...</p>}
              </Grid>
              <Grid item sm={1} />
            </Grid>
          </Grid>
        </Grid>
      </Router>
    </VideoContext.Provider>
  );
};

export default App;
