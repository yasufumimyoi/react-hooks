import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CoursePage } from '../src/pages/CoursePage';
import { LoginPage } from '../src/pages/LoginPage';
import { LandingPage } from '../src/pages/LandingPage';
import { NotFoundPage } from '../src/pages/NotFoundPage';
import { MaterialUIPage } from '../src/pages/MaterialUIPage';
import { ReactPage } from '../src/pages/ReactPage';
import { ReactRouterPage } from '../src/pages/ReactRouterPage';
import { Header } from '../src/components/Header';
import { SignUpForm } from '../src/components/SignUpForm';
import { AwsPage } from '../src/pages/AwsPage';
import { DockerPage } from '../src/pages/DockerPage';
import { FirebasePage } from '../src/pages/FirebasePage';
import { JavascriptPage } from '../src/pages/JavascriptPage';
import { TypescriptPage } from '../src/pages/TypescriptPage';
import { NodePage } from '../src/pages/NodePage';
import { VideoPage } from '../src/pages/VideoPage';
import { AllVideoPage } from '../src/pages/AllVideoPage';

const AppRoutes = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/courses" component={CoursePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/sign" component={SignUpForm} />
        <Route exact path="/courses/aws" component={AwsPage} />
        <Route exact path="/courses/docker" component={DockerPage} />
        <Route exact path="/courses/firebase" component={FirebasePage} />
        <Route exact path="/courses/javascript" component={JavascriptPage} />
        <Route exact path="/courses/react" component={ReactPage} />
        <Route exact path="/courses/router" component={ReactRouterPage} />
        <Route exact path="/courses/material" component={MaterialUIPage} />
        <Route exact path="/courses/typescript" component={TypescriptPage} />
        <Route exact path="/courses/node" component={NodePage} />
        <Route exact path="/all" component={AllVideoPage} />
        <Route path="/courses/aws/:id" component={VideoPage} />
        <Route path="/courses/docker/:id" component={VideoPage} />
        <Route path="/courses/firebase/:id" component={VideoPage} />
        <Route path="/courses/javascript/:id" component={VideoPage} />
        <Route path="/courses/react/:id" component={VideoPage} />
        <Route path="/courses/router/:id" component={VideoPage} />
        <Route path="/courses/material/:id" component={VideoPage} />
        <Route path="/courses/typescript/:id" component={VideoPage} />
        <Route path="/courses/node/:id" component={VideoPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export { AppRoutes };
