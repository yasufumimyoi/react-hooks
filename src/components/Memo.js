import React from 'react';
import { Typography } from '@material-ui/core';
import { MemoUseStyles } from '../style/style';

export const Memo = ({ content, category, time }) => {
  const classes = MemoUseStyles();
  return (
    <div key={time} className={classes.container}>
      <Typography variant="subtitle2" gutterBottom>
        Category: {category} <span>{time}</span>
      </Typography>
      <div className={classes.memo}>
        <Typography variant="body1">{content}</Typography>
      </div>
    </div>
  );
};
