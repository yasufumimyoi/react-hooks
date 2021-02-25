import React from 'react';
import { Grid } from '@material-ui/core';
import NotFoundImage from '../assets/images/notFound.svg';
import { Link } from 'react-router-dom';
import { NotFoundUseStyles } from '../style/style';

const NotFoundPage = () => {
  const classes = NotFoundUseStyles();
  return (
    <Grid container>
      <Grid item sm={1} xs={1} />
      <Grid item sm={10} xs={10} className={classes.container}>
        <p>申し訳ございません。</p>
        <p>指定したファイルまたはディレクトリは存在しておりません。</p>
        <Link to="/" style={{ color: 'black' }}>
          ホーム画面に戻る
        </Link>
        <Grid container style={{ justifyContent: 'center' }}>
          <Grid item sm={6} xs={10} style={{ marginTop: 40 }}>
            <img src={NotFoundImage} width="100%" alt="NotFound" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={1} xs={1} />
    </Grid>
  );
};

export { NotFoundPage };
