import { createTheme } from '@mui/material/styles';
import { pink, yellow } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: pink[500],
    },
    secondary: {
      main: yellow[500],
    },
  },
});
