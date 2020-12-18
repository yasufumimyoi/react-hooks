import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AllVideos } from './AllVideos';
import { Courses } from './Courses';
import { Login } from './Login';
import { LandingPage } from '../components/LandingPage';
import { NotFound } from './NotFound';
import { MaterialUIPage } from './MaterialUIPage';
import { MaterialUIVideo } from './MaterialUIVideo';
import { ReactPage } from './ReactPage';
import { ReactVideo } from './ReactVideo';
import { ReactRouterPage } from './ReactRouterPage';
import { ReactRouterVideo } from './ReactRouterVideo';
import { Header } from './Header';
import { SignUp } from './SignUp';
import { AwsPage } from './AwsPage';
import { AwsVideo } from './AwsVideo';
import { DockerPage } from './DockerPage';
import { FirebasePage } from './FirebasePage';
import { JavascriptPage } from './JavascriptPage';
import { TypescriptPage } from './TypescriptPage';
import { NodePage } from './NodePage';
import { DockerVideo } from './DockerVideo';
import { FirebaseVideo } from './FirebaseVideo';
import { JavascriptVideo } from './JavascriptVideo';
import { TypescriptVideo } from './TypescriptVideo';
import { NodeVideo } from './NodeVideo';

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
        <Route exact path="/courses/react-router" component={ReactRouterPage} />
        <Route exact path="/courses/material" component={MaterialUIPage} />
        <Route exact path="/courses/typescript" component={TypescriptPage} />
        <Route exact path="/courses/node" component={NodePage} />
        <Route path="/courses/aws/:id" component={AwsVideo} />
        <Route path="/courses/docker/:id" component={DockerVideo} />
        <Route path="/courses/firebase/:id" component={FirebaseVideo} />
        <Route path="/courses/javascript/:id" component={JavascriptVideo} />
        <Route path="/courses/react/:id" component={ReactVideo} />
        <Route path="/courses/react-router/:id" component={ReactRouterVideo} />
        <Route path="/courses/material/:id" component={MaterialUIVideo} />
        <Route path="/courses/typescript/:id" component={TypescriptVideo} />
        <Route path="/courses/nodejs/:id" component={NodeVideo} />
        <Route path="/all" component={AllVideos} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export { Contents };
