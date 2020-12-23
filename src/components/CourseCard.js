import React from 'react';
import { useHistory } from 'react-router-dom';
import { coursesStyles } from '../style/style';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';

const CourseCard = ({ title, image, path }) => {
  const classes = coursesStyles();
  const history = useHistory();
  const handleEachCoursesRouter = (path) => {
    history.push(path);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <img alt={`${title}`} src={image} width="300" height="200" />
      </CardContent>
      <CardActions className={classes.button}>
        <Button
          color="secondary"
          fullWidth
          onClick={() => handleEachCoursesRouter(path)}
          size="large"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export { CourseCard };
