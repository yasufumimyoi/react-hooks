import React from 'react';
import { Grid, Box } from '@material-ui/core';
import NotFoundImage from '../images/NotFound.svg';
import { Link } from 'react-router-dom';
import { NotFoundUseStyles } from '../style/pages';

const NotFound = () => {
  const classes = NotFoundUseStyles();
  return (
    <Grid container>
      <Grid item sm={1} />
      <Grid item sm={10} className={classes.container}>
        <p>申し訳ございません。</p>
        <p>
          指定したファイルまたはディレクトリは存在しておりません。
          <Link to="/">ホーム画面に戻る</Link>
        </p>
        <Box>
          <img src={NotFoundImage} width="60%" alt="NotFound" />
        </Box>
      </Grid>
      <Grid item sm={1} />
    </Grid>
  );
};

export { NotFound };
