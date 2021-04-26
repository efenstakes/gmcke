import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';



// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1776BB',
    },
    secondary: {
      main: '#E69500',
    },

    common: {
        black: '#292931',
    },
    
    error: {
      main: red.A400,
    },
    warning: {
      main: red.A100,
    },
    background: {
      default: '#fff',
    },
  },

  shape: {
    borderRadius: 12
  }
});

console.log('theme ', theme)

export default theme;