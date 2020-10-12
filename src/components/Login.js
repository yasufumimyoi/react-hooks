import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LockIcon from "@material-ui/icons/Lock";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";

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
            <Typography variant="p" component="p">
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
              <Button variant="contained" color="secondary">
                Sign In With Google
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;

// <div className={classes.root}>
// <Typography variant="h4" component="h4">
//   Log in
// </Typography>
// <form>
//   <PersonIcon />
//   <Typography>Email</Typography>
//   <input type="email" placeholder="Email" />
//   <LockIcon />
//   <Typography>Password</Typography>
//   <input type="password" placeholder="Password" />
//   <Button variant="contained" color="primary">
//     Log in
//   </Button>
// </form>
// <Typography variant="h5" component="h5">
//   Or Sign in with your account
// </Typography>
// <Button variant="contained" color="primary">
//   Sign In With Facebook
// </Button>
// <Button variant="contained" color="secondary">
// //   Sign In With Google
// </Button>
// // </div>
