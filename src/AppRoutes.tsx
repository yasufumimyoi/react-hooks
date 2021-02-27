import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { CoursePage } from './pages/Course';
import { LoginPage } from './pages/Login';
//import { LandingPage } from '../src/pages/LandingPage';
import { NotFoundPage } from './pages/NotFound';
import { Header } from './components/Header/Header';
import { SignUpForm } from './components/Form/SignUpForm';
import { VideoPage } from './pages/Video';
import { AllVideoPage } from './pages/AllVideo';
import { ProfilePage } from './pages/Profile';
import { ProfileForm } from '../src/components/Profile/ProfileForm';
import { VideoList } from './pages/VideoList';
import { TestLandingPage } from './pages/TestLandingPage';
import { Footer } from './components/Footer/Footer';
import { Reset } from './pages/Reset';
import { Privacy } from './pages/Privacy';
import { Contact } from './pages/Contact';

const AppRoutes: FC = () => {
  return (
    <div>
      <Header />
      <main style={{ paddingTop: 97, paddingBottom: 50 }}>
        <Switch>
          <Route exact path="/" component={TestLandingPage} />
          <Route exact path="/courses" component={CoursePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/sign" component={SignUpForm} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/all" component={AllVideoPage} />
          <Route exact path="/courses/aws" component={VideoList} />
          <Route exact path="/courses/docker" component={VideoList} />
          <Route exact path="/courses/firebase" component={VideoList} />
          <Route exact path="/courses/javascript" component={VideoList} />
          <Route exact path="/courses/react" component={VideoList} />
          <Route exact path="/courses/router" component={VideoList} />
          <Route exact path="/courses/material" component={VideoList} />
          <Route exact path="/courses/typescript" component={VideoList} />
          <Route exact path="/courses/node" component={VideoList} />
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
      </main>
      <Footer />
    </div>
  );
};

export { AppRoutes };
