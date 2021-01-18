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
      <Typography
        className={classes.subTitle}
        variant="h6"
        style={{ marginLeft: 30, marginRight: 30 }}
      >
        Missionをこなして達成率を上げながら楽しく学んでいきましょう。
        <p>
          <span className={classes.all} onClick={handleAll}>
            全てのMission一覧
          </span>
        </p>
      </Typography>
      <Grid item sm={2} xs={1} />
      <Grid item sm={8} xs={10}>
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
      <Grid item sm={2} xs={1} />
    </Grid>
  );
};

export { CoursePage };
