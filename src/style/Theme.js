import { createTheme } from '@mui/material/styles';



let themeFirst = createTheme({
  palette: {
      primary: {
        main: '#1E2C42',
        // light: will be calculated from palette.primary.main,
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        main: '#EC9142',
        //light: '#F5EBFF',
        // dark: will be calculated from palette.secondary.main,
        //contrastText: '#47008F',
      },
      white :{
        main:'#ffffff',
      },
      bleu:{
        main:'#51CFDE',
        light:'#b3ebf0',
        cell:'#e0f7f9',
      },
      emergency:{
        main:'#FF0000',
        light:'#ef5350',
        dark:'#c62828',
      }
    }
});

export const theme = createTheme(themeFirst, {
// Custom colors created with augmentColor go here
palette: {
  rose: themeFirst.palette.augmentColor({
    color: {
      main: '#E9428E',
    },
    name: 'rose',
  }),
},
});
