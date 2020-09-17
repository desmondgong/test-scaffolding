import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { render } from '@testing-library/react';
import getTheme from '../theme';

const theme = getTheme();

export const renderWithTheme = (children) =>
  // eslint-disable-next-line react/jsx-filename-extension
  render(<MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>);

export default renderWithTheme;
