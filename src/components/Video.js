import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import { CircularProgress, Typography, Grid } from '@material-ui/core';
import { VideoContext } from '../context/video-context';
import firebase from '../firebase/firebase.util';
import '../style/player.css';
import { videosUseStyles } from '../style/pages';
import { CompleteBox } from './CompleteBox';

const Video = (props) => {
  const {
    AWVideo,
    DVideo,
    FVideo,
    JVideo,
    MVideo,
    NVideo,
    RVideo,
    RRVideo,
    TVideo,
    currentUser,
    guestUser,
    setAWVideo,
    setDVideo,
    setFVideo,
    setJVideo,
    setMVideo,
    setNVideo,
    setRVideo,
    setRRVideo,
    setTVideo,
  } = useContext(VideoContext);
  const firestore = firebase.firestore();
  const classes = videosUseStyles();

  const { id } = props.match.params;
  const parsedId = parseInt(id);
  const location = props.match.url;
  const removeCourse = location.replace('/courses/', '');
  const findEscape = removeCourse.indexOf('/');
  const editedPath = removeCourse.slice(0, findEscape);

  let videoData = [];
  let matchedVideo = [];
  switch (editedPath) {
    case 'aws':
      videoData = AWVideo;
      matchedVideo = AWVideo.filter((video) => video.id === parsedId);
      break;
    case 'docker':
      videoData = DVideo;
      matchedVideo = DVideo.filter((video) => video.id === parsedId);
      break;
    case 'firebase':
      videoData = FVideo;
      matchedVideo = FVideo.filter((video) => video.id === parsedId);
      break;
    case 'javascript':
      videoData = JVideo;
      matchedVideo = JVideo.filter((video) => video.id === parsedId);
      break;
    case 'node':
      videoData = NVideo;
      matchedVideo = NVideo.filter((video) => video.id === parsedId);
      break;
    case 'react':
      videoData = RVideo;
      matchedVideo = RVideo.filter((video) => video.id === parsedId);
      break;
    case 'router':
      videoData = RRVideo;
      matchedVideo = RRVideo.filter((video) => video.id === parsedId);
      break;
    case 'typescript':
      videoData = TVideo;
      matchedVideo = TVideo.filter((video) => video.id === parsedId);
      break;
    case 'material':
      videoData = MVideo;
      matchedVideo = MVideo.filter((video) => video.id === parsedId);
      break;
    default:
      break;
  }

  const saveCompletedStatus = (id) => {
    const newItems = videoData.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    const removeCourse = newItems[0].path.replace('/courses/', '');
    const findEscape = removeCourse.indexOf('/');
    const editedPath = removeCourse.slice(0, findEscape);

    console.log('videoData', newItems);
    console.log('path', editedPath);

    switch (editedPath) {
      case 'aws':
        setAWVideo(newItems);
        break;
      case 'docker':
        setDVideo(newItems);
        break;
      case 'firebase':
        setFVideo(newItems);
        break;
      case 'javascript':
        setJVideo(newItems);
        break;
      case 'node':
        setNVideo(newItems);
        break;
      case 'react':
        setRVideo(newItems);
        break;
      case 'router':
        setRRVideo(newItems);
        break;
      case 'typescript':
        setTVideo(newItems);
        break;
      case 'material':
        setMVideo(newItems);
        break;
      default:
        break;
    }

    if (currentUser.isAnonymous === false || guestUser.isAnonymous === false) {
      firestore
        .collection('users')
        .doc(currentUser.uid)
        .update({ [`${editedPath}`]: [...newItems] });
      console.log('firebase', editedPath);
    } else {
      console.log('Guest user data updated');
      sessionStorage.setItem(`${editedPath}`, JSON.stringify(newItems));
    }
  };

  return (
    <div>
      {matchedVideo.length === 0 ? (
        <Grid container className={classes.loading}>
          <Grid item sm={4}>
            <CircularProgress />
          </Grid>
        </Grid>
      ) : (
        <Grid container>
          <Grid item sm={2} />
          <Grid item sm={8}>
            <div
              className="film_container"
              style={{ padding: '30px', maxWidth: '1200px' }}
            >
              <div className="film_box">
                <div className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    controls
                    onEnded={() => saveCompletedStatus(matchedVideo[0].id)}
                    url={matchedVideo[0].url}
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
              <Typography variant="h6" component="h6">
                {matchedVideo[0].title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="span"
              >
                視聴済み
              </Typography>
              <CompleteBox
                path={props.match.url}
                title={matchedVideo[0].title}
                completed={matchedVideo[0].completed}
              />
            </div>
          </Grid>
          <Grid item sm={2} />
        </Grid>
      )}
    </div>
  );
};

export { Video };
