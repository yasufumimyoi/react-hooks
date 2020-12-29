import React, { useContext, useEffect, useState } from 'react';
import { VideoContext } from '../contexts/video-context';
import { Grid } from '@material-ui/core';
import { videosUseStyles } from '../style/style';
import { ListOfVideos } from '../components/ListOfVideos';

export const TestPage = () => {
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

  const [all, setAll] = useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [videoResults, setVideoResults] = React.useState([]);
  const classes = videosUseStyles();

  //全ての動画をセットする
  useEffect(() => {
    console.log(allVideos);
    setAll(allVideos);
  }, []);

  useEffect(() => {
    setAll(allVideos);
  }, [searchTerm]);

  //絞り込み機能
  useEffect(() => {
    if (searchTerm === '') {
      setVideoResults(all);
    } else {
      setVideoResults(
        all.filter((video) =>
          video.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm]);

  return (
    <Grid container>
      <Grid item sm={2} />
      <Grid item sm={8}>
        <div className={classes.search}>
          <input
            className={classes.input}
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Grid container justify="space-evenly" className={classes.container}>
          {videoResults.map((video) => (
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
  );
};
