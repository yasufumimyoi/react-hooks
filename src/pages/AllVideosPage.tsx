import React, { useContext } from 'react';
import { VideoContext } from '../contexts/video-context';
import { Grid } from '@material-ui/core';
import { videosUseStyles } from '../style/style';
import { ListOfVideos } from '../components/ListOfVideos';

const AllVideosPage = () => {
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
  } = useContext(VideoContext);

  const allVideos = [
    ...AWVideo,
    ...DVideo,
    ...FVideo,
    ...JVideo,
    ...MVideo,
    ...NVideo,
    ...RVideo,
    ...RRVideo,
    ...TVideo,
  ];

  const classes = videosUseStyles();
  return (
    <div>
      <Grid container>
        <Grid item sm={2} />
        <Grid item sm={8}>
          <Grid container justify="space-evenly" className={classes.container}>
            {allVideos.map((video) => (
              <ListOfVideos
                id={video.id}
                key={video.title}
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

export { AllVideosPage };
