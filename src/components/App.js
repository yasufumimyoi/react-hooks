import React, { useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Grid } from "@material-ui/core";

import Header from "./Header";
import Contents from "./Contents";
import VideoContext from "../context/video-context";
import ReactVideo from "../videos/ReactVideo";
import ReactRouterVideo from "../videos/ReactRouterVideo";
import MaterialUIVideo from "../videos/MaterialUIVideo";

const App = () => {
  const [MVideo, setMVideo] = useState(MaterialUIVideo);
  const [RVideo, setRVideo] = useState(ReactVideo);
  const [RRVideo, setRRVideo] = useState(ReactRouterVideo);
  return (
    <VideoContext.Provider
      value={{ MVideo, setMVideo, RVideo, setRVideo, RRVideo, setRRVideo }}
    >
      <Router>
        <Grid container direction="column">
          <Grid item>
            <Header />
          </Grid>
          <Grid container>
            <Grid item sm={1} />
            <Grid item xs={12} sm={10}>
              <Grid container>
                <Contents />
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
