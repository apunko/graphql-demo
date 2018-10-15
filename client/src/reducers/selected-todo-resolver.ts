import { AnyAction } from 'redux';
import { SELECT_TODO } from '../actions/action-types';

export default (state: number = null, action: AnyAction) => {
  switch (action.type) {
    case SELECT_TODO:
      return action.payload;
    default:
      return state;
  }
};
