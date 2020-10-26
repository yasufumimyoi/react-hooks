import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LockIcon from "@material-ui/icons/Lock";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { provider } from "../firebase/firebase.util";
import firebase from "../firebase/firebase.util";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  button: {
    width: "28ch",
  },
  layout: {
    marginBottom: 30,
  },
  image: {
    cursor: "pointer",
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const handelLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const usersRef = firebase.firestore().collection("users");
        usersRef.get().then((snapShot) => {
          let temp = [];
          snapShot.forEach((doc) => {
            temp.push(doc.id);
            console.log(temp);
          });
          console.log("temp", temp);
        });
      })
      .then(() => {
        history.push("/courses");
      });
  };

  const handleLogout = () => {
    firebase.auth().signOut();
    history.push("/courses");
  };

  // useEffect(() => {
  //   const usersRef = firebase.firestore().collection("users");
  //   usersRef.get().then((snapShot) => {
  //     snapShot.forEach((doc) => {
  //       console.log(doc.id);
  //     });
  //   });
  // });

  useEffect(() => {
    const usersRef = firebase.firestore().collection("users");
    usersRef.doc("iTlKBpsYWoekOrTGbc2krmbASak2").update({
      RVideo: [
        {
          id: 1,
          url: "https://www.youtube.com/watch?v=ufodJVcpmps&t=2068s",
          image: "http://img.youtube.com/vi/ufodJVcpmps/mqdefault.jpg",
          title: "Build a Movie APP With React | React Tutorial for Beginners",
          path: "/courses/react/1",
          completed: false,
        },
        {
          id: 2,
          url: "https://www.youtube.com/watch?v=GuA0_Z1llYU&t=1465s",
          image: "http://img.youtube.com/vi/GuA0_Z1llYU/mqdefault.jpg",
          title: "Build a Weather App in React JS | React JS beginner Tutorial",
          path: "/courses/react/2",
          completed: false,
        },
        {
          id: 3,
          url: "https://www.youtube.com/watch?v=U9T6YkEDkMo",
          image: "http://img.youtube.com/vi/U9T6YkEDkMo/mqdefault.jpg",
          title: "Build a Recipe App With React | React Tutorial For Beginners",
          path: "/courses/react/3",
          completed: false,
        },
        {
          id: 4,
          url: "https://www.youtube.com/watch?v=hQAHSlTtcmY",
          image: "http://img.youtube.com/vi/hQAHSlTtcmY/mqdefault.jpg",
          title: "Learn React In 30 Minutes",
          path: "/courses/react/4",
          completed: false,
        },
        {
          id: 5,
          url: "https://www.youtube.com/watch?v=DLX62G4lc44",
          image: "http://img.youtube.com/vi/DLX62G4lc44/mqdefault.jpg",
          title: "Learn React JS - Full Course for Beginners - Tutorial 2019",
          path: "/courses/react/5",
          completed: false,
        },
        {
          id: 6,
          url: "https://www.youtube.com/watch?v=khJlrj3Y6Ls&t=124s",
          image: "http://img.youtube.com/vi/khJlrj3Y6Ls/mqdefault.jpg",
          title:
            "Build a COVID-19 Tracker Application - React JS Project (Hooks, Material UI, Charts js)",
          path: "/courses/react/6",
          completed: false,
        },
        {
          id: 7,
          url: "https://www.youtube.com/watch?v=VPVzx1ZOVuw&t=1711s",
          image: "http://img.youtube.com/vi/VPVzx1ZOVuw/mqdefault.jpg",
          title: "Build a YouTube Clone Application Using React",
          path: "/courses/react/7",
          completed: false,
        },
        {
          id: 8,
          url: "https://www.youtube.com/watch?v=o5CdCETh8cQ&t=1555s",
          image: "http://img.youtube.com/vi/o5CdCETh8cQ/mqdefault.jpg",
          title:
            "React Fetch API Data | Build and Deploy a Real Advice App Project",
          path: "/courses/react/8",
          completed: false,
        },
        {
          id: 9,
          url: "https://www.youtube.com/watch?v=YaioUnMw0mo",
          image: "http://img.youtube.com/vi/YaioUnMw0mo/mqdefault.jpg",
          title: "React App - Breaking Bad API",
          path: "/courses/react/9",
          completed: false,
        },
      ],
    });
  }, []);

  return (
    <div>
      <Grid container>
        <Typography variant="h4" component="h4">
          Log in
        </Typography>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Email" />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <LockIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Password" />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Log in
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <Typography variant="h5" component="h5">
              Or Sign in with your account
            </Typography>
          </Grid>
          <Grid container>
            <Grid item>
              <Button variant="contained" color="primary">
                Sign In With Facebook
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={handelLogin}
              >
                Sign In With Google
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <button onClick={handleLogout}>Logout</button>
      </Grid>
    </div>
  );
};

export default Login;
