import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import RestaurantCard, { Props as RestaurantCardProps } from '../RestaurantCard';

interface Props {
  favRestaurants: RestaurantCardProps[];
}

const RestaurantSelector = (props: Props): JSX.Element => {
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
