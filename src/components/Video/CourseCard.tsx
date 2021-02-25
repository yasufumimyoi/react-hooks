import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { coursesStyles } from '../../style/style';
import { Card, CardContent, Typography } from '@material-ui/core';
import { CourseProps } from '../../types/types';

const CourseCard: FC<CourseProps> = ({ title, image, path }) => {
  const classes = coursesStyles();
  const history = useHistory();

  //選択したコースページに移動する
  const handleEachCoursesRouter = (path: string) => {
    history.push(path);
  };

  return (
    <Card className={classes.root}>
      <CardContent onClick={() => handleEachCoursesRouter(path)}>
        <Typography variant="h5">{title}</Typography>
        <img alt={`${title}`} src={image} width="300" height="200" />
      </CardContent>
    </Card>
  );
};

export { CourseCard };
