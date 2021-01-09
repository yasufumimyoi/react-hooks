import React from 'react';
import { useHistory } from 'react-router-dom';
import { coursesStyles } from '../style/style';
import { coursesDescriptions } from '../utils/Descriptions';
import { Grid, Typography } from '@material-ui/core';
import { CourseCard } from '../components/CourseCard';

const CoursePage = () => {
  const classes = coursesStyles();
  const history = useHistory();

  //動画一覧ページに移動する
  const handleAll = () => {
    history.push('/all');
  };

  return (
    <Grid container className={classes.container}>
      <Typography className={classes.subTitle} variant="h6">
        教材をこなして進捗率を上げながら楽しく学んでいきましょう。
        <p> 現在50本以上の動画を用意しております。</p>
        <p>
          <span className={classes.all} onClick={handleAll}>
            全ての動画一覧
          </span>
        </p>
      </Typography>
      <Grid item sm={2} />
      <Grid item sm={8}>
        <Grid container justify="space-evenly">
          {coursesDescriptions.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              image={course.image}
              path={course.path}
            />
          ))}
        </Grid>
      </Grid>
      <Grid item sm={2} />
    </Grid>
  );
};

export { CoursePage };
