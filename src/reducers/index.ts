import { AppAction, ActionType } from '../constants';

interface State {
  favRestaurants: [];
  notification: string;
}
export const INITIAL_STATE: State = {
  favRestaurants: [],
  notification: '',
};
export default (state = INITIAL_STATE, action: AppAction): State => {
  switch (action.type) {
    case ActionType.FAV_RESTAURANTS_LOAD_DATA:
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
    case ActionType.NOTIFICATION_SET_MESSAGE:
      return {
        ...state,
        notification: action.data,
      };
    default:
      return state;
  }
};
