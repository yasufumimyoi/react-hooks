import React from "react";
import { Switch, Route } from "react-router-dom";
import Courses from "./Courses";
import VideoList from "./VideoList";
import Login from "./Login";
import Join from "./Join";
import NotFound from "./NotFound";

const Contents = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <VideoList />
        </Route>
        <Route exact path="/courses">
          <Courses />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/join">
          <Join />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default Contents;
