import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button, Typography, TextField, Grid } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import FacebookIcon from "@material-ui/icons/Facebook";
import firebase from "../firebase/firebase.util";
import { loginStyles } from "../style/pages";
import TwitterIcon from "@material-ui/icons/Twitter";
import { provider } from "../firebase/firebase.util";
import { VideoContext } from "../context/video-context";

const Login = () => {
  const classes = loginStyles();
  const history = useHistory();
  const { MVideo, RVideo, RRVideo } = useContext(VideoContext);

  //Session中に視聴完了済の動画情報と共に新規ユーザーアカウントの作成
  const createAccount = async () => {
    try {
      const newUser = await firebase.auth().currentUser.linkWithPopup(provider);
      await firebase
        .firestore()
        .collection("users")
        .doc(newUser.user.uid)
        .set({
          material: [...MVideo],
          react: [...RVideo],
          router: [...RRVideo],
        });
      await history.push("/courses");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <Grid container>
        <Grid item>
          <Typography variant="h5" component="h5">
            SIGN UP
          </Typography>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Username"
              fullWidth
              variant="outlined"
            />
            <TextField
              id="standard-basic"
              label="Password"
              fullWidth
              variant="outlined"
            />
            <Button variant="contained" color="primary" fullWidth>
              Sign UP
            </Button>
            <Typography>Sign up with social media</Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AccountCircle />}
              onClick={createAccount}
            >
              Google
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<TwitterIcon />}
            >
              Twitter
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<FacebookIcon />}
            >
              FaceBook
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export { Login };
