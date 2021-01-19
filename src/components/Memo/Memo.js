import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { MemoUseStyles } from '../../style/style';
import { AlertDialog } from './AlertDialog';
import { EditDialog } from './EditDialog';

export const Memo = ({
  memoContent,
  time,
  state,
  category,
  content,
  memo,
  setContent,
  setCategory,
  setMemo,
  handelRemove,
}) => {
  const classes = MemoUseStyles();
  return (
    <div>
      <Grid container key={time}>
        <Grid item style={{ marginTop: '15px', marginRight: '10px' }}>
          <Typography variant="subtitle2" gutterBottom>
            {time}
          </Typography>
        </Grid>
        <Grid item>
          <EditDialog
            state={state}
            category={category}
            content={content}
            memo={memo}
            setContent={setContent}
            setCategory={setCategory}
            setMemo={setMemo}
          />
        </Grid>
        <Grid item>
          <AlertDialog handelRemove={handelRemove} />
        </Grid>
      </Grid>
      <div></div>
      <div className={classes.memo}>
        <Typography className={classes.content} variant="body1">
          {memoContent}
        </Typography>
      </div>
    </div>
  );
};
