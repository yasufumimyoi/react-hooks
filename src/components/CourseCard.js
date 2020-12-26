import React from 'react';
import { useHistory } from 'react-router-dom';
import { coursesStyles } from '../style/style';
import { Card, CardContent, Typography } from '@material-ui/core';

const CourseCard = ({ title, image, path }) => {
  const classes = coursesStyles();
  const history = useHistory();

  //選択したコースページに移動する
  const handleEachCoursesRouter = (path) => {
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
