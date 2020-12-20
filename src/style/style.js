import { makeStyles } from '@material-ui/core/styles';

export const coursesStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 20,
    textAlign: 'center',
  },
  subTitle: {
    marginBottom: 30,
    width: '100%',
    textAlign: 'center',
  },
  all: {
    cursor: 'pointer',
    textDecorationLine: 'underline',
  },
  container: {
    marginTop: '90px',
  },
  button: {
    justifyContent: 'center',
  },
});

export const headerStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '40px',
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  extra: {
    flexGrow: 1,
  },
  title: {
    cursor: 'pointer',
  },
  icon: {
    cursor: 'pointer',
  },
}));

export const loginStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    width: '28ch',
  },
  image: {
    cursor: 'pointer',
  },
  container: {
    justifyContent: 'center',
    textAlign: 'center',
    margin: '90px',
  },
  validate: {
    color: 'red',
  },
  form: {
    width: '20%',
  },
}));

export const videosUseStyles = makeStyles({
  title: {
    textAlign: 'center',
  },
  number: {
    fontSize: 30,
  },
  box: {
    width: '320px',
    cursor: 'pointer',
    textOverflow: 'ellipsis',
    '&:hover': {
      opacity: '0.7',
      zIndex: '10',
      transition: '.25s',
    },
  },
  videoTitle: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: '320px',
    textOverflow: 'ellipsis',
  },
  adjust: {
    marginBottom: 35,
  },
  container: {
    marginTop: '90px',
  },
  loading: {
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '15%',
  },
});

export const detailUseStyles = makeStyles({
  wrap: {
    position: 'relative',
    paddingTop: '56.25%%',
  },
  player: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  box: {
    height: '500px',
    width: '100%',
    maxWidth: '800px',
  },
});

export const NotFoundUseStyles = makeStyles({
  container: {
    textAlign: 'center',
    marginTop: '90px',
  },
  box: {
    width: '540px',
  },
});
