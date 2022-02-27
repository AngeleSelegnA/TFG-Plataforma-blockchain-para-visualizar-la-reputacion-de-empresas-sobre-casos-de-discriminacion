import { createTheme } from '@mui/material/styles';
import { blue, orange, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[100],
      dark:  blue[500],
    },
    secondary: {
      main: orange[100],
    }, 

    text: {
        main: blue[900],
        secondary: orange[900],
    },
    error: {
        dark: red[900],
        main: red[500],
        light: red[100],
    },
    success: {
      main:  blue[500],
  },
  },
});

export default theme
