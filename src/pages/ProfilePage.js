import React, { useContext } from 'react';
import { VideoContext } from '../contexts/video-context';
import { Profile } from '../components/Profile';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
      <Grid item sm={1} />
    </Grid>
  );
};

// export const ProfilePage = () => {
//   const { userData } = useContext(VideoContext);
//   const classes = useStyles();

//   return (
//     <Grid container className={classes.container}>
//       <Grid item sm={1} />
//       <Grid item sm={5} className={classes.item} xs={10}>
//         {userData.map((user) => (
//           <Profile
//             key={user.name}
//             userName={user.name}
//             userGender={user.gender}
//             userMessage={user.message}
//             userImage={user.image}
//           />
//         ))}
//       </Grid>
//       <Grid item sm={1} />
//     </Grid>
//   );
// };
