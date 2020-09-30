import React, { useEffect, ReactElement } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { fetchFavRestaurants } from '../../actions';
import RestaurantSelector from '../../components/RestaurantSelector';
import RestaurantCard from '../../components/RestaurantCard';
import { Restaurant } from '../../types';
import styles from './styles';

interface Props {
  favRestaurants: Array<Restaurant>;
  fetchFavRestaurants: () => void;
}

const useStyles = makeStyles(styles);

const RestaurantSelectorContainer = (props: Props): ReactElement => {
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

const mapStateToProps = (state) => ({
  favRestaurants: state.favRestaurants,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFavRestaurants() {
    dispatch(fetchFavRestaurants());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantSelectorContainer);
