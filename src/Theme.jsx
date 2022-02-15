import {createTheme} from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#123456',
    },
    secondary: {
      main: "#66fcf1",
    },
    background: 'abcdef',
  },
});

export default theme;