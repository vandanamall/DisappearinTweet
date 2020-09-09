import { createMuiTheme } from '@material-ui/core/styles';


export const pxToRem = px => `${px / 22.5}rem`;
export const pxToVw = px =>
  `${(100 / document.documentElement.clientWidth) * px}vw`;

export const pxToVh = px =>
  `${px / (document.documentElement.clientHeight * 0.01)}vh`;

export default createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#000000',
      dark: '#000000'
    }
  }
});
