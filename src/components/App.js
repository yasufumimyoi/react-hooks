import React from "react";
import Header from "./Header";

import { Grid } from "@material-ui/core";
import Contents from "./Contents";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
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
  );
};

export default App;
