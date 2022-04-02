import { createTheme } from "@mui/material";
import { cyan, teal } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: cyan[400],
      dark: cyan[700],
      light: cyan[200],
      contrastText: '#ffffff',
        },
        secondary: {
      main: teal[500],
      dark: teal[400],
      light: teal[300],
      contrastText: '#ffffff',  
        },
        background: {
            default: '#212121',
            paper: '#bdbdbd',
        }
  },
});
