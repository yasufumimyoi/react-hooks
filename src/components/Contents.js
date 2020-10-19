import React from "react";
import { Switch, Route } from "react-router-dom";

import Courses from "./Courses";
import Login from "./Login";
import Join from "./Join";
import NotFound from "./NotFound";

import ReactPage from "./ReactPage";
import ReactVideo from "./ReactVideo";
import ReactRouterPage from "./ReactRouterPage";
import ReactRouterVideo from "./ReactRouterVideo";
import MaterialUIPage from "./MaterialUIPage";
import MaterialUIVideo from "./MaterialUIVideo";

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
        <Route exact path="/join">
          <Join />
        </Route>
        <Route exact path="/courses/react">
          <ReactPage />
        </Route>
        <Route exact path="/courses/react-router">
          <ReactRouterPage />
        </Route>
        <Route exact path="/courses/material">
          <MaterialUIPage />
        </Route>
        <Route path="/courses/react/:id" component={ReactVideo} />
        <Route path="/courses/react-router/:id" component={ReactRouterVideo} />
        <Route path="/courses/material/:id" component={MaterialUIVideo} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default Contents;
