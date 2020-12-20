import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { videosUseStyles } from '../style/pages';
import { useHistory } from 'react-router-dom';
import { CompleteBox } from './CompleteBox';

const Videos = ({ id, title, image, path, completed }) => {
  const classes = videosUseStyles();
  const history = useHistory();
  const handleRouter = (path) => {
    history.push(path);
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
        <CompleteBox id={id} title={title} path={path} completed={completed} />
      </Box>
    </Box>
  );
};

export { Videos };
