import 'isomorphic-fetch';
import { Dispatch } from 'redux';
import { AppAction, ActionType } from '../constants';

export const loadFavRestaurants = (restaurants: []): AppAction => ({
  type: ActionType.FAV_RESTAURANTS_LOAD_DATA,
  data: restaurants,
});

export const setNotification = (message: string): AppAction => ({
  type: ActionType.NOTIFICATION_SET_MESSAGE,
  data: message,
});

export const fetchFavRestaurants = () => (dispatch: Dispatch): AppAction =>
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
