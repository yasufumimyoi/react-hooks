import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { coursesStyles } from '../style/pages';
import { coursesDescriptions } from '../utils/Descriptions';
import { Grid, Typography } from '@material-ui/core';
import { CoursesItems } from './CoursesItems';
import firebase from '../firebase/firebase.util';

const Courses = () => {
  const classes = coursesStyles();
  const history = useHistory();

  //動画一覧ページに移動する
  const handleAll = () => {
    history.push('/all');
  };

  // useEffect(() => {
  //   firebase
  //     .firestore()
  //     .collection("videos")
  //     .doc("javascript")
  //     .set({
  //       javascript: [
  //         {
  //           id: 1,
  //           url: "https://www.youtube.com/watch?v=_ApRMRGI-6g",
  //           image: "http://img.youtube.com/vi/_ApRMRGI-6g/mqdefault.jpg",
  //           title: "Heres how JavaScript's Nested Object Destructuring works",
  //           path: "/courses/javascript/1",
  //           completed: false,
  //         },
  //         {
  //           id: 2,
  //           url: "https://www.youtube.com/watch?v=NIq3qLaHCIs&t=374s",
  //           image: "http://img.youtube.com/vi/NIq3qLaHCIs/mqdefault.jpg",
  //           title:
  //             "Why Is Array/Object Destructuring So Useful And How To Use It",
  //           path: "/courses/javascript/2",
  //           completed: false,
  //         },
  //         {
  //           id: 3,
  //           url: "https://www.youtube.com/watch?v=-vR3a11Wzt0",
  //           image: "http://img.youtube.com/vi/-vR3a11Wzt0/mqdefault.jpg",
  //           title: "Destructuring in ES6 - Beau teaches JavaScript",
  //           path: "/courses/javascript/3",
  //           completed: false,
  //         },
  //         {
  //           id: 4,
  //           url: "https://www.youtube.com/watch?v=iLx4ma8ZqvQ&t=193s",
  //           image: "http://img.youtube.com/vi/iLx4ma8ZqvQ/mqdefault.jpg",
  //           title:
  //             "...spread operator and rest operator - Beau teaches JavaScript",
  //           path: "/courses/javascript/4",
  //           completed: false,
  //         },
  //         {
  //           id: 5,
  //           url: "https://www.youtube.com/watch?v=V_Kr9OSfDeU",
  //           image: "http://img.youtube.com/vi/V_Kr9OSfDeU/mqdefault.jpg",
  //           title: "JavaScript Async Await",
  //           path: "/courses/javascript/5",
  //           completed: false,
  //         },
  //         {
  //           id: 6,
  //           url: "https://www.youtube.com/watch?v=Bv_5Zv5c-Ts",
  //           image: "http://img.youtube.com/vi/Bv_5Zv5c-Ts/mqdefault.jpg",
  //           title:
  //             "JavaScript: Understanding the Weird Parts - The First 3.5 Hours",
  //           path: "/courses/javascript/6",
  //           completed: false,
  //         },
  //       ],
  //     });
  // }, []);

  // console.log("set");

  return (
    <Grid container className={classes.container}>
      <Typography className={classes.subTitle} variant="h6" component="h6">
        教材をこなして進捗率を上げながら楽しく学んでいきましょう。
        <p> 現在50本以上の動画を用意しております。</p>
        <p className={classes.all} onClick={handleAll}>
          全ての動画一覧
        </p>
      </Typography>
      <Grid item sm={2} />
      <Grid item sm={8}>
        <Grid container justify="space-evenly">
          {coursesDescriptions.map((course, index) => (
            <CoursesItems
              key={index}
              title={course.title}
              subtitle={course.subtitle}
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

export { Courses };
