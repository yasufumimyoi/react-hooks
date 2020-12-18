import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import {
  Checkbox,
  CircularProgress,
  Typography,
  Grid,
} from '@material-ui/core';
import { VideoContext } from '../context/video-context';
import firebase from '../firebase/firebase.util';
import '../style/player.css';
import { videosUseStyles } from '../style/pages';

//
const TypescriptVideo = (props) => {
  //
  const { TVideo, setTVideo, currentUser, guestUser } = useContext(
    VideoContext
  );
  const firestore = firebase.firestore();

  const classes = videosUseStyles();

  //paramsと動画IDが合致した動画データを抽出する
  const { id } = props.match.params;
  const parsedId = parseInt(id);
  //
  const matchedVideo = TVideo.filter((video) => video.id === parsedId);

  //
  //動画視聴後にこのメソッドが呼ばれてcompletedにチェックが付く
  const saveCompletedStatus = (id) => {
    const newItems = TVideo.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTVideo(newItems);

    if (currentUser.isAnonymous === false || guestUser.isAnonymous === false) {
      firestore
        .collection('users')
        .doc(currentUser.uid)
        //
        .update({ typescript: [...newItems] });
    } else {
      console.log('Guest user data updated');
      sessionStorage.setItem('typescript', JSON.stringify(newItems));
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
              <Checkbox
                checked={matchedVideo[0].completed}
                inputProps={{ 'aria-label': 'primary checkbox' }}
                onChange={() => {
                  saveCompletedStatus(matchedVideo[0].id);
                }}
              />
            </div>
          </Grid>
          <Grid item sm={2} />
        </Grid>
      )}
    </div>
  );
};

export { TypescriptVideo };
