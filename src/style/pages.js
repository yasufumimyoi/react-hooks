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
    //marginLeft: 20,
    //marginRight: 20,
    //marginTop: 20,
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

export const headerButtonUseStyles = makeStyles(() => ({
  link: {
    marginRight: "8px",
    color: "white",
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
  layout: {
    marginBottom: 30,
  },
  image: {
    cursor: "pointer",
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
