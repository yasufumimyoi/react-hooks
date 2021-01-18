import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { videosUseStyles } from '../style/style';
import { VideoContext } from '../contexts/video-context';
import { ListOfVideos } from '../components/ListOfVideos';
import CountUp from 'react-countup';
import Swal from 'sweetalert2';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

export const VideoListPage = (props) => {
  const classes = videosUseStyles();
  const { allVideo } = useContext(VideoContext);
  const { width, height } = useWindowSize();

  const location = props.match.url;
  const editedPath = location.replace('/courses/', '');

  let videoData = [];
  switch (editedPath) {
    case 'aws':
      videoData = allVideo.filter((video) => video.category === 'aws');
      break;
    case 'docker':
      videoData = allVideo.filter((video) => video.category === 'docker');
      break;
    case 'firebase':
      videoData = allVideo.filter((video) => video.category === 'firebase');
      break;
    case 'javascript':
      videoData = allVideo.filter((video) => video.category === 'javascript');
      break;
    case 'node':
      videoData = allVideo.filter((video) => video.category === 'node');
      break;
    case 'react':
      videoData = allVideo.filter((video) => video.category === 'react');
      break;
    case 'router':
      videoData = allVideo.filter((video) => video.category === 'router');
      break;
    case 'typescript':
      videoData = allVideo.filter((video) => video.category === 'typescript');
      break;
    case 'material':
      videoData = allVideo.filter((video) => video.category === 'material');
      break;
    default:
      break;
  }

  //動画視聴済かどうかcompletedの値を見ている
  let numberOfCompleted = 0;
  for (let i = 0; i < videoData.length; i++) {
    if (videoData[i].completed === true) {
      numberOfCompleted = numberOfCompleted + 1;
    }
  }

  //動画視聴済の割合の計算を行っている
  let AchievementRate =
    Math.round((numberOfCompleted / videoData.length) * 100) || 0;

  if (
    AchievementRate === 100 &&
    sessionStorage.getItem(`${editedPath}`) == null
  ) {
    Swal.fire(
      'おめでとうございます!!!',
      '達成率が100%となりました!!その他のコースも学習してみましょう!!',
      'success'
    );
    sessionStorage.setItem(`${editedPath}`, 'completed');
  }

  return (
    <div className={classes.container}>
      {AchievementRate === 100 && <Confetti width={width} height={height} />}
      <h3 className={classes.title}>
        {' '}
        現在の達成率{' '}
        <CountUp
          end={AchievementRate}
          duration={5}
          className={classes.number}
        />{' '}
        %
      </h3>
      <Grid container>
        <Grid item sm={2} />
        <Grid item sm={8}>
          <Grid container justify="space-evenly">
            {videoData.map((video) => (
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
        </Grid>
        <Grid item sm={2} />
      </Grid>
    </div>
  );
};
