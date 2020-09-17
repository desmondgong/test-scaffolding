import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import storeFactory from './stores/configureStore';
import getTheme from './theme';
import App from './App';

const store = storeFactory();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={getTheme()}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('content'),
);
