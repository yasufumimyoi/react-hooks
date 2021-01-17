import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CoursePage } from '../src/pages/CoursePage';
import { LoginPage } from '../src/pages/LoginPage';
//import { LandingPage } from '../src/pages/LandingPage';
import { NotFoundPage } from '../src/pages/NotFoundPage';
import { Header } from '../src/components/Header';
import { SignUpForm } from '../src/components/SignUpForm';
import { VideoPage } from '../src/pages/VideoPage';
import { AllVideoPage } from '../src/pages/AllVideoPage';
import { ProfilePage } from '../src/pages/ProfilePage';
import { ProfileForm } from '../src/components/ProfileForm';
import { VideoListPage } from './pages/VideoListPage';
import { TestLandingPage } from './pages/TestLandingPage';
import { Footer } from '../src/components/Footer';

const AppRoutes = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={TestLandingPage} />
        <Route exact path="/courses" component={CoursePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/sign" component={SignUpForm} />
        <Route exact path="/all" component={AllVideoPage} />
        <Route exact path="/courses/aws" component={VideoListPage} />
        <Route exact path="/courses/docker" component={VideoListPage} />
        <Route exact path="/courses/firebase" component={VideoListPage} />
        <Route exact path="/courses/javascript" component={VideoListPage} />
        <Route exact path="/courses/react" component={VideoListPage} />
        <Route exact path="/courses/router" component={VideoListPage} />
        <Route exact path="/courses/material" component={VideoListPage} />
        <Route exact path="/courses/typescript" component={VideoListPage} />
        <Route exact path="/courses/node" component={VideoListPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/profileEdit" component={ProfileForm} />
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
      <Footer />
    </div>
  );
};

export { AppRoutes };
