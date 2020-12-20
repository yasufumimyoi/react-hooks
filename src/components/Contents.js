import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Courses } from './Courses';
import { Login } from './Login';
import { LandingPage } from '../components/LandingPage';
import { NotFound } from './NotFound';
import { MaterialUIPage } from './MaterialUIPage';
import { ReactPage } from './ReactPage';
import { ReactRouterPage } from './ReactRouterPage';
import { Header } from './Header';
import { SignUp } from './SignUp';
import { AwsPage } from './AwsPage';
import { DockerPage } from './DockerPage';
import { FirebasePage } from './FirebasePage';
import { JavascriptPage } from './JavascriptPage';
import { TypescriptPage } from './TypescriptPage';
import { NodePage } from './NodePage';
import { AllVideos } from './AllVideos';
import { Video } from './Video';

const Contents = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign" component={SignUp} />
        <Route exact path="/courses/aws" component={AwsPage} />
        <Route exact path="/courses/docker" component={DockerPage} />
        <Route exact path="/courses/firebase" component={FirebasePage} />
        <Route exact path="/courses/javascript" component={JavascriptPage} />
        <Route exact path="/courses/react" component={ReactPage} />
        <Route exact path="/courses/router" component={ReactRouterPage} />
        <Route exact path="/courses/material" component={MaterialUIPage} />
        <Route exact path="/courses/typescript" component={TypescriptPage} />
        <Route exact path="/courses/node" component={NodePage} />
        <Route path="/courses/aws/:id" component={Video} />
        <Route path="/courses/docker/:id" component={Video} />
        <Route path="/courses/firebase/:id" component={Video} />
        <Route path="/courses/javascript/:id" component={Video} />
        <Route path="/courses/react/:id" component={Video} />
        <Route path="/courses/router/:id" component={Video} />
        <Route path="/courses/material/:id" component={Video} />
        <Route path="/courses/typescript/:id" component={Video} />
        <Route path="/courses/node/:id" component={Video} />
        <Route path="/all" component={AllVideos} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export { Contents };
