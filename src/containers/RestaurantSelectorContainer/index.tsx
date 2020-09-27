import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { fetchFavRestaurants } from '../../actions';
import RestaurantSelector from '../../components/RestaurantSelector';
import RestaurantCard from '../../components/RestaurantCard';

import styles from './styles';

const useStyles = makeStyles(styles);

const RestaurantSelectorContainer = (props): JSX.Element => {
  const { favRestaurants } = props;
  const classes = useStyles(props);
  useEffect(() => {
    props.fetchFavRestaurants();
  }, []);
  return (
    <div className={classes.root}>
      <Typography variant="h5">Fav Restaurants</Typography>
      <div className={classes.favRestrContainer}>
        {favRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
      <RestaurantSelector favRestaurants={favRestaurants} />
    </div>
  );
};
RestaurantSelectorContainer.propTypes = {
  favRestaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      thumb: PropTypes.string,
    }),
  ).isRequired,
  fetchFavRestaurants: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favRestaurants: state.favRestaurants,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFavRestaurants() {
    dispatch(fetchFavRestaurants());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantSelectorContainer);
