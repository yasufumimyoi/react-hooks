import React from "react";
import { useHistory } from "react-router-dom";
import { coursesStyles } from "../style/pages";
import { coursesDescriptions } from "../utils/Descriptions";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";

const Courses = () => {
  const classes = coursesStyles();
  const history = useHistory();

  //選択したコースページに移動する
  const handleEachCoursesRouter = (path) => {
    history.push(path);
  };

  //動画一覧ページに移動する
  const handleAll = () => {
    history.push("/all");
  };

  return (
    <Grid container>
      <Typography className={classes.subTitle} variant="h6" component="h6">
        教材をこなして進捗率を上げながら楽しく学んでいきましょう。
        <p> 現在50本以上の動画を用意しております。</p>
        <p className={classes.all} onClick={handleAll}>
          全ての動画一覧
        </p>
      </Typography>
      <Grid container>
        {coursesDescriptions.map((course) => (
          <Grid item key={course.title}>
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {course.title}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.description}
                >
                  {course.subTitle}
                </Typography>
                <img alt="React" src={course.image} width="300" height="200" />
              </CardContent>
              <CardActions className={classes.button}>
                <Button
                  onClick={() => handleEachCoursesRouter(course.path)}
                  size="small"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export { Courses };
