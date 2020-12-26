import React from 'react';
import { useHistory } from 'react-router-dom';
import { coursesStyles } from '../style/style';
import { coursesDescriptions } from '../utils/descriptions';
import { Grid, Typography } from '@material-ui/core';
import { CourseCard } from '../components/CourseCard';
//import firebase from '../firebase/firebase.util';

const CoursePage = () => {
  const classes = coursesStyles();
  const history = useHistory();

  //動画一覧ページに移動する
  const handleAll = () => {
    history.push('/all');
  };

  // useEffect(() => {
  //   firebase
  //     .firestore()
  //     .collection('videos')
  //     .doc('node')
  //     .set({
  //       node: [
  //         {
  //           id: 1,
  //           url: 'https://www.youtube.com/watch?v=L72fhGm1tfE',
  //           image: 'http://img.youtube.com/vi/L72fhGm1tfE/mqdefault.jpg',
  //           title: 'Express JS Crash Course',
  //           path: '/courses/node/1',
  //           completed: false,
  //         },
  //         {
  //           id: 2,
  //           url: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4',
  //           image: 'http://img.youtube.com/vi/fBNz5xF-Kx4/mqdefault.jpg',
  //           title: 'Node.js Crash Course',
  //           path: '/courses/node/2',
  //           completed: false,
  //         },
  //         {
  //           id: 3,
  //           url: 'https://www.youtube.com/watch?v=pKd0Rpw7O48',
  //           image: 'http://img.youtube.com/vi/pKd0Rpw7O48/mqdefault.jpg',
  //           title: 'How to build a REST API with Node js & Express',
  //           path: '/courses/node/3',
  //           completed: false,
  //         },
  //         {
  //           id: 4,
  //           url: 'https://www.youtube.com/watch?v=lY6icfhap2o',
  //           image: 'http://img.youtube.com/vi/lY6icfhap2o/mqdefault.jpg',
  //           title: 'Learn Express Middleware In 14 Minutes',
  //           path: '/courses/node/4',
  //           completed: false,
  //         },
  //       ],
  //     });
  // }, []);

  // console.log('set');

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
