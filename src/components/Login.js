import React, { useEffect, useContext } from "react";
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
import VideoContext from "../context/video-context";

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
  const { setCurrentUser } = useContext(VideoContext);

  const handelLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        history.push("/courses");
      });
  };

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setCurrentUser(null);
        history.push("/");
      });
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("videos")
      .doc("material")
      .set({
        material: [
          {
            id: 1,
            url: "https://www.youtube.com/watch?v=tKzSnjWPtEw",
            image: "http://img.youtube.com/vi/tKzSnjWPtEw/mqdefault.jpg",
            title: "React + Material UI #2: Actually coding a UX design",
            path: "/courses/material/1",
            completed: false,
          },
          {
            id: 2,
            url: "https://www.youtube.com/watch?v=3HAARPCabUo",
            image: "http://img.youtube.com/vi/3HAARPCabUo/mqdefault.jpg",
            title:
              "React & Material UI #26: Header (Appbar + Toolbar) & React Router",
            path: "/courses/material/2",
            completed: false,
          },
          {
            id: 3,
            url: "https://www.youtube.com/watch?v=zT62eVxShsY",
            image: "http://img.youtube.com/vi/zT62eVxShsY/mqdefault.jpg",
            title: "Multi Step Form With React & Material UI",
            path: "/courses/material/3",
            completed: false,
          },
          {
            id: 4,
            url: "https://www.youtube.com/watch?v=rK0Lz8x7npA",
            image: "http://img.youtube.com/vi/rK0Lz8x7npA/mqdefault.jpg",
            title: "Build landing page with React and Material UI.",
            path: "/courses/material/4",
            completed: false,
          },
          {
            id: 5,
            url: "https://www.youtube.com/watch?v=Jkj_XP80h1k",
            image: "http://img.youtube.com/vi/Jkj_XP80h1k/mqdefault.jpg",
            title: "Material-UI + React Router - #7 Navigation Menu",
            path: "/courses/material/5",
            completed: false,
          },
          {
            id: 6,
            url: "https://www.youtube.com/watch?v=DJ1_CKs_LPI",
            image: "http://img.youtube.com/vi/DJ1_CKs_LPI/mqdefault.jpg",
            title: "Material UI React - Build a Blog page",
            path: "/courses/material/6",
            completed: false,
          },
          {
            id: 7,
            url: "https://www.youtube.com/watch?v=vyJU9efvUtQ",
            image: "http://img.youtube.com/vi/vyJU9efvUtQ/mqdefault.jpg",
            title: "Material UI React Tutorial",
            path: "/courses/material/7",
            completed: false,
          },
          {
            id: 8,
            url: "https://www.youtube.com/watch?v=-XKaSCU0ZLM",
            image: "http://img.youtube.com/vi/-XKaSCU0ZLM/mqdefault.jpg",
            title: "How to Design a Perfect React Material UI Form",
            path: "/courses/material/8",
            completed: false,
          },
          {
            id: 9,
            url: "https://www.youtube.com/watch?v=jnQ1-XW7KNY",
            image: "http://img.youtube.com/vi/jnQ1-XW7KNY/mqdefault.jpg",
            title: "React Material UI Table with Paging Sorting and Filtering",
            path: "/courses/material/9",
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
