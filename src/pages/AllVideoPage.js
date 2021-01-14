import React, { useContext, useEffect } from 'react';
import { VideoContext } from '../contexts/video-context';
import { Grid, Typography } from '@material-ui/core';
import { videosUseStyles } from '../style/style';
import { ListOfVideos } from '../components/ListOfVideos';
import TextField from '@material-ui/core/TextField';

export const AllVideoPage = () => {
  const { videoResults, setVideoResults, allVideo } = useContext(VideoContext);
  const [searchTerm, setSearchTerm] = React.useState('');
  const classes = videosUseStyles();

  //絞り込み機能
  useEffect(() => {
    setVideoResults(
      allVideo.filter((video) =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <Grid container>
      <Grid item sm={2} />
      <Grid item sm={8} xs={12}>
        <div className={classes.search}>
          <Typography variant="h6">動画検索</Typography>
          {videoResults.length === allVideo.length ? (
            <p>検索結果: 0件</p>
          ) : (
            <p>{`検索結果: ${videoResults.length}件`}</p>
          )}
          <div>
            <TextField
              variant="outlined"
              label="キーワードで探してみる"
              className={classes.input}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
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
