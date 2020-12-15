import { makeStyles } from "@material-ui/core/styles";

export const AllVideosStyles = makeStyles({
  root: {
    maxWidth: 320,
    marginRight: "60px",
    marginBottom: 40,
  },
  number: {
    fontSize: 30,
  },
  outline: {
    marginRight: "30px",
    cursor: "pointer",
    textOverflow: "ellipsis",
    "&:hover": {
      opacity: "0.7",
      zIndex: "10",
      transition: ".25s",
    },
  },
  box: {
    width: "320px",
  },
  videoTitle: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: "320px",
    textOverflow: "ellipsis",
  },
  adjust: {
    marginBottom: 35,
  },
});

export const coursesStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 20,
    textAlign: "center",
  },
  subTitle: {
    marginBottom: 30,
    width: "100%",
    textAlign: "center",
  },
  description: {
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    justifyContent: "center",
  },
  all: {
    cursor: "pointer",
    textDecorationLine: "underline",
  },
  container: {
    marginTop: "90px",
  },
});

export const headerStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "40px",
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const loginStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  button: {
    width: "28ch",
  },
  image: {
    cursor: "pointer",
  },
  layout: {
    justifyContent: "center",
    marginTop: "90px",
    textAlign: "center",
  },
  validate: {
    color: "red",
  },
  form: {
    width: "20%",
  },
}));

export const videosUseStyles = makeStyles({
  title: {
    textAlign: "center",
  },
  number: {
    fontSize: 30,
  },
  box: {
    width: "320px",
    cursor: "pointer",
    textOverflow: "ellipsis",
    "&:hover": {
      opacity: "0.7",
      zIndex: "10",
      transition: ".25s",
    },
  },
  videoTitle: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: "320px",
    textOverflow: "ellipsis",
  },
  adjust: {
    marginBottom: 35,
  },
  container: {
    marginTop: "90px",
  },
  loading: {
    justifyContent: "center",
    textAlign: "center",
    marginTop: "15%",
  },
});

export const detailUseStyles = makeStyles({
  wrap: {
    position: "relative",
    paddingTop: "56.25%%",
  },
  player: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  box: {
    height: "500px",
    width: "100%",
    maxWidth: "800px",
  },
});

export const NotFoundUseStyles = makeStyles({
  container: {
    textAlign: "center",
    marginTop: "90px",
  },
  box: {
    width: "540px",
  },
});
