import React from "react";
import { useHistory } from "react-router-dom";
import { coursesStyles } from "../style/pages";

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

const CoursesItems = ({ title, subtitle, image, path }) => {
  const classes = coursesStyles();
  const history = useHistory();

  const handleEachCoursesRouter = (path) => {
    history.push(path);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          className={classes.description}
        >
          {subtitle}
        </Typography>
        <img alt="React" src={image} width="300" height="200" />
      </CardContent>
      <CardActions className={classes.button}>
        <Button onClick={() => handleEachCoursesRouter(path)} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export { CoursesItems };
