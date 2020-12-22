import React, { useContext } from 'react';
import { Checkbox } from '@material-ui/core';
import { VideoContext } from '../contexts/video-context';
import { firebase } from '../firebase/firebase.util';

//チェックボックス
export const CompleteBox = ({ title, path, completed }) => {
  const firestore = firebase.firestore();
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

  let removeCourse = path.replace('/courses/', '');
  let findEscape = removeCourse.indexOf('/');
  let editedPath = removeCourse.slice(0, findEscape);

  let newItems = null;
  const saveCompleteStatus = () => {
    let videoData = [];
    switch (editedPath) {
      case 'aws':
        videoData = AWVideo;
        break;
      case 'docker':
        videoData = DVideo;
        break;
      case 'firebase':
        videoData = FVideo;
        break;
      case 'javascript':
        videoData = JVideo;
        break;
      case 'node':
        videoData = NVideo;
        break;
      case 'react':
        videoData = RVideo;
        break;
      case 'router':
        videoData = RRVideo;
        break;
      case 'typescript':
        videoData = TVideo;
        break;
      case 'material':
        videoData = MVideo;
        break;
      default:
        break;
    }

    newItems = videoData.map((item) => {
      if (item.title === title) {
        item.completed = !item.completed;
      }
      return item;
    });

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
    } else {
      sessionStorage.setItem(`${editedPath}`, JSON.stringify(newItems));
    }
  };

  return (
    <Checkbox
      checked={completed}
      inputProps={{ 'aria-label': 'primary checkbox' }}
      onChange={saveCompleteStatus}
    />
  );
};
