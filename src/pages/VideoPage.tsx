import React, { useContext } from 'react';
import { CircularProgress, Typography, Grid, Button } from '@material-ui/core';
import { VideoContext } from '../contexts/video-context';
import { firebase } from '../firebase/firebase.util';
import { videosUseStyles } from '../style/style';
import { CompleteBox } from '../components/CompleteBox';
import { ResponsivePlayer } from '../components/Player';
import { ListOfVideos } from '../components/ListOfVideos';
import { useHistory } from 'react-router-dom';
import { TestMemo } from './TestMemo';

//Fix me later
const VideoPage = (props: any) => {
  //(props: { match: { params: any; url: any } })
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

  //pathの文字列からコース名だけ抽出する Ex: "/courses/react/1" ==> react
  const removeCourse = location.replace('/courses/', '');
  const findEscape = removeCourse.indexOf('/');
  const editedPath = removeCourse.slice(0, findEscape);

  //Fix me later
  //type defalutValue = []
  //let videoData: Array<VideoProps | defalutValue >  = [];

  //抽出されたコース名によってセットするデータを決定する
  let videoData: any = [];
  let matchedVideo: any = [];
  switch (editedPath) {
    case 'aws':
      videoData = AWVideo;
      matchedVideo = AWVideo.filter((video: any) => video.id === parsedId);
      break;
    case 'docker':
      videoData = DVideo;
      matchedVideo = DVideo.filter((video: any) => video.id === parsedId);
      break;
    case 'firebase':
      videoData = FVideo;
      matchedVideo = FVideo.filter((video: any) => video.id === parsedId);
      break;
    case 'javascript':
      videoData = JVideo;
      matchedVideo = JVideo.filter((video: any) => video.id === parsedId);
      break;
    case 'node':
      videoData = NVideo;
      matchedVideo = NVideo.filter((video: any) => video.id === parsedId);
      break;
    case 'react':
      videoData = RVideo;
      matchedVideo = RVideo.filter((video: any) => video.id === parsedId);
      break;
    case 'router':
      videoData = RRVideo;
      matchedVideo = RRVideo.filter((video: any) => video.id === parsedId);
      break;
    case 'typescript':
      videoData = TVideo;
      matchedVideo = TVideo.filter((video: any) => video.id === parsedId);
      break;
    case 'material':
      videoData = MVideo;
      matchedVideo = MVideo.filter((video: any) => video.id === parsedId);
      break;
    default:
      break;
  }

  //次の動画へ移動する
  const history = useHistory();
  const handleNextPagenation = () => {
    history.push(`/courses/${editedPath}/${parsedId + 1}`);
  };

  //前の動画へ移動する
  const handlePreviousPagenation = () => {
    history.push(`/courses/${editedPath}/${parsedId - 1}`);
  };

  //動画を95%視聴したら、動画IDと格納しておいた動画データのIDが一致したらcompletedのBoolean値をTrueにさせる
  const saveCompletedStatus = (id: string, played: number) => {
    if (played >= 0.95 && matchedVideo[0].completed === false) {
      const newItems = videoData.map((item: any) => {
        if (item.id === id) {
          item.completed = true;
        }
        return item;
      });

      const removeCourse = newItems[0].path.replace('/courses/', '');
      const findEscape = removeCourse.indexOf('/');
      const editedPath = removeCourse.slice(0, findEscape);

      //completedのBoolean値を更新する
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

      //匿名ユーザーでなければ、firestoreのデータを更新する
      if (
        currentUser.isAnonymous === false ||
        guestUser.isAnonymous === false
      ) {
        firestore
          .collection('users')
          .doc(currentUser.uid)
          .update({ [`${editedPath}`]: [...newItems] });
        //匿名ユーザーであれば、sessionStorageにデータを一時保存させる
      } else {
        sessionStorage.setItem(`${editedPath}`, JSON.stringify(newItems));
      }
    }
  };

  //表示される動画が見つかるまでローディング表示を行う
  return (
    <div>
      {matchedVideo.length === 0 ? (
        <Grid container className={classes.loading}>
          <Grid item sm={4}>
            <CircularProgress />
          </Grid>
        </Grid>
      ) : (
        <Grid container className={classes.container}>
          <Grid item sm={1} />
          <Grid item sm={7} xs={12}>
            <ResponsivePlayer
              saveCompletedStatus={saveCompletedStatus}
              matchedVideo={matchedVideo}
            />
            <Typography variant="h6" component="h6" className={classes.textbox}>
              {matchedVideo[0].title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="span">
              視聴済み
            </Typography>
            <CompleteBox
              path={props.match.url}
              title={matchedVideo[0].title}
              completed={matchedVideo[0].completed}
            />
            <Grid container>
              <Grid item>
                {parsedId > 1 && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handlePreviousPagenation}
                    style={{ marginRight: '10px' }}
                  >
                    Previous
                  </Button>
                )}
              </Grid>
              <Grid item>
                {videoData.length != parsedId && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNextPagenation}
                    style={{ marginRight: '10px' }}
                  >
                    Next
                  </Button>
                )}
              </Grid>
            </Grid>
            <hr />
            <TestMemo />
          </Grid>
          <Grid item sm={1} />
          <Grid>
            {videoData.map((video: any) => (
              <ListOfVideos
                key={video.id}
                id={video.id}
                title={video.title}
                image={video.image}
                path={video.path}
                completed={video.completed}
              />
            ))}
          </Grid>
          <Grid item sm={1} />
        </Grid>
      )}
    </div>
  );
};

export { VideoPage };
