import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { provider } from "../firebase/firebase.util";
import firebase from "../firebase/firebase.util";
import { useHistory } from "react-router-dom";
import VideoContext from "../context/video-context";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

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
  const { MVideo, RVideo, RRVideo, setCurrentUser } = useContext(VideoContext);

  const handleCreateAccount = () => {
    firebase
      .auth()
      .currentUser.linkWithPopup(provider)
      .then((result) => {
        const creUser = result.user;
        console.log("success", creUser);
        firebase
          .firestore()
          .collection("users")
          .doc(creUser.uid)
          .set({
            material: [...MVideo],
            react: [...RVideo],
            router: [...RRVideo],
          });
      })
      .then(() => {
        history.push("/courses");
      });
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
              onClick={handleCreateAccount}
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

export default Login;

// useEffect(() => {
//   firebase
//     .firestore()
//     .collection("videos")
//     .doc("material")
//     .set({
//       material: [
//         {
//           id: 1,
//           url: "https://www.youtube.com/watch?v=tKzSnjWPtEw",
//           image: "http://img.youtube.com/vi/tKzSnjWPtEw/mqdefault.jpg",
//           title: "React + Material UI #2: Actually coding a UX design",
//           path: "/courses/material/1",
//           completed: false,
//         },
//         {
//           id: 2,
//           url: "https://www.youtube.com/watch?v=3HAARPCabUo",
//           image: "http://img.youtube.com/vi/3HAARPCabUo/mqdefault.jpg",
//           title:
//             "React & Material UI #26: Header (Appbar + Toolbar) & React Router",
//           path: "/courses/material/2",
//           completed: false,
//         },
//         {
//           id: 3,
//           url: "https://www.youtube.com/watch?v=zT62eVxShsY",
//           image: "http://img.youtube.com/vi/zT62eVxShsY/mqdefault.jpg",
//           title: "Multi Step Form With React & Material UI",
//           path: "/courses/material/3",
//           completed: false,
//         },
//         {
//           id: 4,
//           url: "https://www.youtube.com/watch?v=rK0Lz8x7npA",
//           image: "http://img.youtube.com/vi/rK0Lz8x7npA/mqdefault.jpg",
//           title: "Build landing page with React and Material UI.",
//           path: "/courses/material/4",
//           completed: false,
//         },
//         {
//           id: 5,
//           url: "https://www.youtube.com/watch?v=Jkj_XP80h1k",
//           image: "http://img.youtube.com/vi/Jkj_XP80h1k/mqdefault.jpg",
//           title: "Material-UI + React Router - #7 Navigation Menu",
//           path: "/courses/material/5",
//           completed: false,
//         },
//         {
//           id: 6,
//           url: "https://www.youtube.com/watch?v=DJ1_CKs_LPI",
//           image: "http://img.youtube.com/vi/DJ1_CKs_LPI/mqdefault.jpg",
//           title: "Material UI React - Build a Blog page",
//           path: "/courses/material/6",
//           completed: false,
//         },
//         {
//           id: 7,
//           url: "https://www.youtube.com/watch?v=vyJU9efvUtQ",
//           image: "http://img.youtube.com/vi/vyJU9efvUtQ/mqdefault.jpg",
//           title: "Material UI React Tutorial",
//           path: "/courses/material/7",
//           completed: false,
//         },
//         {
//           id: 8,
//           url: "https://www.youtube.com/watch?v=-XKaSCU0ZLM",
//           image: "http://img.youtube.com/vi/-XKaSCU0ZLM/mqdefault.jpg",
//           title: "How to Design a Perfect React Material UI Form",
//           path: "/courses/material/8",
//           completed: false,
//         },
//         {
//           id: 9,
//           url: "https://www.youtube.com/watch?v=jnQ1-XW7KNY",
//           image: "http://img.youtube.com/vi/jnQ1-XW7KNY/mqdefault.jpg",
//           title: "React Material UI Table with Paging Sorting and Filtering",
//           path: "/courses/material/9",
//           completed: false,
//         },
//       ],
//     });
// }, []);
