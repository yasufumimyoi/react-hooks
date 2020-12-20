import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import { videosUseStyles } from '../style/style';
import { VideoContext } from '../contexts/video-context';
import Swal from 'sweetalert2';
import Confetti from 'react-confetti';
import { ListOfVideos } from '../components/ListOfVideos';

const FirebasePage = () => {
  const classes = videosUseStyles();
  //
  const { FVideo } = useContext(VideoContext);

  //動画視聴済かどうかcompletedの値を見ている
  let numberOfCompleted = 0;
  //
  for (let i = 0; i < FVideo.length; i++) {
    if (FVideo[i].completed === true) {
      numberOfCompleted = numberOfCompleted + 1;
    }
  }

  //
  //動画視聴済の割合の計算を行っている
  let AchievementRate =
    Math.round((numberOfCompleted / FVideo.length) * 100) || 0;

  if (AchievementRate === 100 && sessionStorage.getItem('f') == null) {
    Swal.fire(
      'おめでとうございます!!!',
      '進捗率100%となりました!!その他のコースも学習してみましょう!!',
      'success'
    );
    sessionStorage.setItem('f', 'completed');
  }

  return (
    <div className={classes.container}>
      <h3 className={classes.title}>
        {' '}
        現在の進捗率{' '}
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
          {AchievementRate === 100 && <Confetti />}
          <Grid container justify="space-evenly">
            {FVideo.map((video) => (
              <ListOfVideos
                key={video.id}
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

export { FirebasePage };
