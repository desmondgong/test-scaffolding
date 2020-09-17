// @flow
import { createMuiTheme } from '@material-ui/core/styles';

const getTheme = () => {
  const theme = {
    typography: { fontFamily: 'open sans' },
  };

  return createMuiTheme(theme);
};

export default getTheme;
