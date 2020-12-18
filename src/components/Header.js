import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import { headerStyles } from '../style/pages';
import { VideoContext } from '../context/video-context';
import { HeaderMenu } from './HeaderMenu';

const Header = () => {
  const classes = headerStyles();
  const { currentUser } = useContext(VideoContext);

  return (
    <Grid container className={classes.root}>
      <Grid item sm={12}>
        <AppBar position="fixed">
          <Toolbar>
            <SchoolIcon className={classes.logo} />
            <Typography variant="h6" className={classes.title}>
              Learn React
            </Typography>
            {currentUser && <HeaderMenu />}
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  );
};
export { Header };
