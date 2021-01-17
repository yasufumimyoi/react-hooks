import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: ['Noto Sans', 'sans-serif'].join(''),
  },
  palette: {
    primary: {
      main: '#01579b',
    },
    secondary: {
      main: '#000000',
    },
  },
  props: {
    MuiCheckbox: {
      color: 'primary',
    },
  },
});
