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
import CountUp from "react-countup";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginRight: "30px",
    marginBottom: 25,
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
});

const Courses = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleRouter = () => {
    history.push("/courses/material");
  };

  return (
    <Grid container>
      <Typography variant="h3" component="h3" className={classes.title}>
        Courses
      </Typography>
      <Typography className={classes.subTitle} variant="h6" component="h6">
        Guided paths to expand your abilities as a well-rounded engineer!
        <p>
          {" "}
          Currently, more than{" "}
          <CountUp end={100} duration={5} className={classes.number} /> videos
          available!!
        </p>
      </Typography>
      <Grid container>
        <Grid item>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                React
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.description}
              >
                Be Productive with React.js, Today's Most Popular Framework
              </Typography>
              <img alt="React" src={ReactImage} width="300" height="200" />
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                React-Router
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.description}
              >
                Master Writing Professional and Modern JavaScript
              </Typography>
              <img
                alt="React"
                src={ReactRouterImage}
                width="300"
                height="200"
              />
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Material UI
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.description}
              >
                Learn CSS, from Laying Out Websites to Performant Animations
              </Typography>
              <img alt="React" src={MaterialImage} width="300" height="200" />
            </CardContent>
            <CardActions>
              <Button onClick={handleRouter} size="small">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Redux
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.description}
              >
                Be Productive with React.js, Today's Most Popular Framework
              </Typography>
              <img alt="React" src={ReduxImage} width="300" height="200" />
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Firebase
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.description}
              >
                Master Writing Professional and Modern JavaScript
              </Typography>
              <img alt="React" src={FirebaseImage} width="300" height="200" />
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Node.js
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.description}
              >
                Learn CSS, from Laying Out Websites to Performant Animations
              </Typography>
              <img alt="React" src={NodeImage} width="300" height="200" />
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Courses;
