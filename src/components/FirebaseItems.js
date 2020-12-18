import React, { useContext } from 'react';
import { Box, Checkbox, Typography } from '@material-ui/core';
import { videosUseStyles } from '../style/pages';
import { useHistory } from 'react-router-dom';
import { VideoContext } from '../context/video-context';
import firebase from '../firebase/firebase.util';

//
const FirebaseUItems = ({ id, title, image, path, completed }) => {
  const classes = videosUseStyles();
  const history = useHistory();
  const handleRouter = (path) => {
    history.push(path);
  };

  //
  const { FVideo, setFVideo, currentUser, guestUser } = useContext(
    VideoContext
  );
  const firestore = firebase.firestore();

  //
  const saveCompletedStatus = (title) => {
    const newItems = FVideo.map((item) => {
      if (item.title === title) {
        item.completed = !item.completed;
      }
      return item;
    });
    //
    setFVideo(newItems);
    if (currentUser.isAnonymous === false || guestUser.isAnonymous === false) {
      firestore
        .collection('users')
        .doc(currentUser.uid)
        //
        .update({ firebase: [...newItems] });
    } else {
      console.log('Guest user data updated');
      sessionStorage.setItem('material', JSON.stringify(newItems));
    }
  };

  return (
    <Box className={classes.box}>
      <img src={image} alt={id} onClick={() => handleRouter(path)} />
      <Typography variant="body1" component="p" className={classes.videoTitle}>
        {title}
      </Typography>
      <Box className={classes.adjust}>
        <Typography variant="body2" color="textSecondary" component="span">
          視聴済み
        </Typography>
        <Checkbox
          checked={completed}
          id={id}
          inputProps={{ 'aria-label': 'primary checkbox' }}
          onChange={() => {
            saveCompletedStatus(title);
          }}
        />
      </Box>
    </Box>
  );
};

export { FirebaseUItems };
