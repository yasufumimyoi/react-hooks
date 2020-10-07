import React from "react";
import { Switch, Route } from "react-router-dom";
import Courses from "./Courses";
import VideoList from "./VidoeList";
import Login from "./Login";
import Join from "./Join";
import NotFound from "./NotFound";

const Contents = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/courses">
          <Courses />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route>
          <Join exact path="/join" />
        </Route>
        <Route exact path="/">
          <VideoList />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default Contents;
