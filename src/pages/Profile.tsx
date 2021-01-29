import React, { useContext } from 'react';
import { VideoContext } from '../contexts/video-context';
import { Profile } from '../components/Profile/Profile';
import { Grid } from '@material-ui/core';
import { Progress } from '../components/Profile/Progress';
import { PProps } from '../types/types';
import { ProfileUseStyles } from '../style/style';

export const ProfilePage = () => {
  const { userData } = useContext(VideoContext);
  const classes = ProfileUseStyles();

  return (
    <Grid container style={{ justifyContent: 'center' }}>
      <Grid item sm={1} />
      <Grid item sm={5} className={classes.item} xs={10}>
        <h3 style={{ textAlign: 'center' }}>プロフィール</h3>
        {userData.map((user: PProps) => (
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
