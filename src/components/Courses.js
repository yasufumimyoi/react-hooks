import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import ReactImage from "../images/ReactImage.svg";
import ReactRouterImage from "../images/React-router.svg";
import MaterialImage from "../images/MaterialImage.svg";
import FirebaseImage from "../images/Firebase.svg";
import ReduxImage from "../images/ReduxImage.svg";
import NodeImage from "../images/NodeImage.svg";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginRight: "30px",
    marginBottom: 25,
    textAlign: "center",
  },
  title: {
    marginBottom: 14,
    width: "100%",
  },
  subTitle: {
    marginBottom: 30,
    width: "100%",
  },
  description: {
    marginBottom: 20,
    textAlign: "center",
  },
  number: {
    fontSize: 30,
  },
  button: {
    justifyContent: "center",
  },
});

const CoursesDescriptions = [
  {
    title: "React",
    image: ReactImage,
    path: "/courses/react",
  },
  {
    title: "React-Router",
    image: ReactRouterImage,
    path: "/courses/react-router",
  },
  {
    title: "Material UI",
    image: MaterialImage,
    path: "/courses/material",
  },
  {
    title: "Redux",
    image: ReduxImage,
    path: "/courses/redux",
  },
  {
    title: "Firebase",
    image: FirebaseImage,
    path: "/courses/firebase",
  },
  {
    title: "Node.js",
    image: NodeImage,
    path: "/courses/node",
  },
];

const Courses = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleRouter = (path) => {
    history.push(path);
  };

  return (
    <Grid container>
      <Typography variant="h3" component="h3" className={classes.title}>
        Courses
      </Typography>
      <Typography className={classes.subTitle} variant="h6" component="h6">
        教材をこなして進捗率を上げながら楽しく学んでいきましょう。
        <p> 現在50本以上の動画を用意しております。</p>
      </Typography>
      <Grid container>
        {CoursesDescriptions.map((course) => (
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
                <Button onClick={() => handleRouter(course.path)} size="small">
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

export default Courses;
