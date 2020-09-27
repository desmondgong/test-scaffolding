import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';

const getTheme = (): ThemeOptions =>
  createMuiTheme({
    typography: { fontFamily: 'open sans' },
  });

export default getTheme;
