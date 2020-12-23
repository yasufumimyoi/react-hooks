import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import { headerStyles } from '../style/style';
import { VideoContext } from '../contexts/video-context';
import { HeaderMenu } from './HeaderMenu';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const classes = headerStyles();
  const history = useHistory();
  const { currentUser } = useContext(VideoContext);

  const handleRouter = () => {
    if (currentUser) {
      history.push('/courses');
    }
  };

  return (
    <Grid container className={classes.root}>
      <Grid item sm={12}>
        <AppBar position="fixed">
          <Toolbar>
            <SchoolIcon className={classes.logo} />
            <Typography
              variant="h6"
              className={currentUser && classes.title}
              onClick={handleRouter}
            >
              Learn React
            </Typography>
            <div className={classes.extra}></div>
            {currentUser && <HeaderMenu />}
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  );
};
export { Header };
