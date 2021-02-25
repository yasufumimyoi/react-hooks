import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import { videosUseStyles } from '../../style/style';
import { useHistory } from 'react-router-dom';
import { CompleteBox } from './CompleteBox';
import { VideoProps } from '../../types/types';

const ListOfVideos: FC<VideoProps> = ({
  id,
  title,
  image,
  path,
  completed,
}) => {
  const classes = videosUseStyles();
  const history = useHistory();
  const handleRouter = (path: string) => {
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
          Completed
        </Typography>
        <CompleteBox title={title} path={path} completed={completed} />
      </Box>
    </Box>
  );
};

export { ListOfVideos };
