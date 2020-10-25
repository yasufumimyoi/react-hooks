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
