import React, { useState, ReactElement } from 'react';
import Button from '@material-ui/core/Button';
import RestaurantCard from '../RestaurantCard';
import { Restaurant } from '../../types';

interface Props {
  favRestaurants: Array<Restaurant>;
}

const RestaurantSelector = (props: Props): ReactElement => {
  const { favRestaurants } = props;
  const [selectedRestrIndex, selectRestr] = useState(null);
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          selectRestr(Math.floor(Math.random() * favRestaurants.length));
        }}
      >
        Random Pick
      </Button>
      {selectedRestrIndex !== null && <RestaurantCard {...favRestaurants[selectedRestrIndex]} />}
    </div>
  );
};

export default RestaurantSelector;
