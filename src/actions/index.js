import 'isomorphic-fetch';
import * as ACTION_TYPES from '../constants/ActionTypes';

export const loadFavRestaurants = (restaurants) => ({
  type: ACTION_TYPES.FAV_RESTAURANTS_LOAD_DATA,
  data: restaurants,
});

export const setNotification = (message) => ({
  type: ACTION_TYPES.NOTIFICATION_SET_MESSAGE,
  data: message,
});

export const fetchFavRestaurants = () => (dispatch) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  fetch('/api/mock/favRestaurants')
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then(
      (data) => {
        dispatch(loadFavRestaurants(data));
      },
      () => {
        dispatch(setNotification('Failed to load fav restaurants'));
      },
    );
