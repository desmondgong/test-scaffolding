import 'isomorphic-fetch';
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { INITIAL_STATE } from '../../../reducers';
import * as actions from '../../../actions';
import * as ACTION_TYPES from '../../../constants';
import TEST_FAV_RESTAURANTS_DATA from '../../test-data/favRestaurants';

describe('actions', () => {
  const initialState = INITIAL_STATE;
  const mockStore = configureStore([thunk]);
  afterEach(() => {
    fetchMock.restore();
  });

  it('should load fav restaurants when fetch successfully', () => {
    const store = mockStore(initialState);
    fetchMock.mock('/api/mock/favRestaurants', {
      headers: { 'content-type': 'json' },
      body: JSON.stringify(TEST_FAV_RESTAURANTS_DATA),
    });
    return store.dispatch(actions.fetchFavRestaurants()).then(() => {
      const expectedActions = [
        {
          type: ACTION_TYPES.FAV_RESTAURANTS_LOAD_DATA,
          data: TEST_FAV_RESTAURANTS_DATA,
        },
      ];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should set notification when failed to fetch.', () => {
    const store = mockStore(initialState);
    fetchMock.mock('/api/mock/favRestaurants', {
      status: 400,
      headers: { 'content-type': 'json' },
    });
    return store.dispatch(actions.fetchFavRestaurants()).then(() => {
      const expectedActions = [
        {
          type: ACTION_TYPES.NOTIFICATION_SET_MESSAGE,
          data: 'Failed to load fav restaurants',
        },
      ];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
