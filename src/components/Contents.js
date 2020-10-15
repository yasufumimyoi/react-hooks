import React from "react";
import { Switch, Route } from "react-router-dom";
import Courses from "./Courses";
import Login from "./Login";
import Join from "./Join";
import NotFound from "./NotFound";
import MaterialUIPage from "./MaterialUIPage";
import MaterialUITest from "./MaterialUITest";
import MaterialUIVideoTest from "./MaterialUIVideoTest";

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
        <Route exact path="/courses/material">
          <MaterialUIPage />
        </Route>
        <Route exact path="/courses/material/test">
          <MaterialUITest />
        </Route>
        <Route path="/courses/material/:id" component={MaterialUIVideoTest} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default Contents;
