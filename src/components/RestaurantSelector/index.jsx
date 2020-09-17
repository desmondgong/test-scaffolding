import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import RestaurantCard from '../RestaurantCard';

const RestaurantSelector = (props) => {
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

RestaurantSelector.propTypes = {
  favRestaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      thumb: PropTypes.string,
    }),
  ).isRequired,
};

export default RestaurantSelector;
