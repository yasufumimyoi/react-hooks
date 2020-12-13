import React from "react";
import { useHistory } from "react-router-dom";
import { coursesStyles } from "../style/pages";
import { coursesDescriptions } from "../utils/Descriptions";
import { Grid, Typography } from "@material-ui/core";
import { CoursesItems } from "./CoursesItems";

const Courses = () => {
  const classes = coursesStyles();
  const history = useHistory();

  //動画一覧ページに移動する
  const handleAll = () => {
    history.push("/all");
  };

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

// <Grid container>
// <Typography className={classes.subTitle} variant="h6" component="h6">
//   教材をこなして進捗率を上げながら楽しく学んでいきましょう。
//   <p> 現在50本以上の動画を用意しております。</p>
//   <p className={classes.all} onClick={handleAll}>
//     全ての動画一覧
//   </p>
// </Typography>
// <Grid container>
//   {coursesDescriptions.map((course) => (
//     <Grid item key={course.title}>
//       <Card className={classes.root}>
//         <CardContent>
//           <Typography variant="h5" component="h2">
//             {course.title}
//           </Typography>
//           <Typography
//             variant="body2"
//             component="p"
//             className={classes.description}
//           >
//             {course.subTitle}
//           </Typography>
//           <img alt="React" src={course.image} width="300" height="200" />
//         </CardContent>
//         <CardActions className={classes.button}>
//           <Button
//             onClick={() => handleEachCoursesRouter(course.path)}
//             size="small"
//           >
//             Learn More
//           </Button>
//         </CardActions>
//       </Card>
//     </Grid>
//   ))}
// </Grid>
// </Grid>
