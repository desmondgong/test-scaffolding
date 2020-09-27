import React from 'react';
import Grid from '@material-ui/core/Grid';
import RestaurantSelectorContainer from './containers/RestaurantSelectorContainer';

const App = (): JSX.Element => (
  <Grid container justify="center">
    <Grid item xs={10}>
      <RestaurantSelectorContainer />
    </Grid>
  </Grid>
);
export default App;
