import * as ACTION_TYPES from '../../../constants/ActionTypes';
import Reducer, { INITIAL_STATE } from '../../../reducers';
import TEST_FAV_RESTAURANTS_DATA from '../../test-data/favRestaurants';

describe('reducers', () => {
  const initialState = INITIAL_STATE;

  it('handles action FAV_RESTAURANTS_LOAD_DATA', () => {
    const action = {
      type: ACTION_TYPES.FAV_RESTAURANTS_LOAD_DATA,
      data: TEST_FAV_RESTAURANTS_DATA,
    };
    const state = Reducer(initialState, action);
    expect(state.favRestaurants.length).toEqual(TEST_FAV_RESTAURANTS_DATA.length);
  });

  it('handles action NOTIFICATION_SET_MESSAGE', () => {
    const msg = 'warning';
    const action = {
      type: ACTION_TYPES.NOTIFICATION_SET_MESSAGE,
      data: msg,
    };
    const state = Reducer(initialState, action);
    expect(state.notification).toEqual(msg);
  });
});
