import { Action } from 'redux';

export enum ActionType {
  FAV_RESTAURANTS_LOAD_DATA,
  NOTIFICATION_SET_MESSAGE,
}

export interface AppAction extends Action<ActionType> {
  data?: any;
}
