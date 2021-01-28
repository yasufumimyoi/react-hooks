import React, { useContext } from 'react';
import { VideoContext } from '../contexts/video-context';
import { Profile } from '../components/Profile/Profile.tsx';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Progress } from '../components/Profile/Progress.tsx';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 350,
  },
  container: {
    justifyContent: 'center',
  },
  item: {
    marginTop: '50px',
  },
});

export const ProfilePage = () => {
  const { userData } = useContext(VideoContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item sm={1} />
      <Grid item sm={5} className={classes.item} xs={10}>
        <h3 style={{ textAlign: 'center' }}>プロフィール</h3>
        {userData.map((user) => (
          <Profile
            key={user.name}
            userName={user.name}
            userGender={user.gender}
            userMessage={user.message}
            userImage={user.image}
          />
        ))}
      </Grid>
      <Grid item sm={5} xs={10} className={classes.item}>
        <h3 style={{ textAlign: 'center' }}>Mission達成率</h3>
        <Progress />
      </Grid>
      <Grid item sm={1} />
    </Grid>
  );
};
