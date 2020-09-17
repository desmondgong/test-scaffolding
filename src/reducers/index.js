import * as ACTION_TYPES from '../constants/ActionTypes';

export const INITIAL_STATE = {
  favRestaurants: [],
  notification: '',
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.FAV_RESTAURANTS_LOAD_DATA:
      return {
        ...state,
        favRestaurants: action.data.map(({ restaurant }) => ({
          id: restaurant.id,
          name: restaurant.name,
          thumb: restaurant.thumb,
          address: restaurant.location.address,
          url: restaurant.url,
        })),
      };
    case ACTION_TYPES.NOTIFICATION_SET_MESSAGE:
      return {
        ...state,
        notification: action.data,
      };
    default:
      return state;
  }
};
