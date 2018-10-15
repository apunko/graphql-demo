import { createStore, combineReducers } from 'redux';
import { selectedTodoReducer } from '../reducers';
import initialState from './initial-state';

const store = createStore(
  combineReducers({
    selectedTodoId: selectedTodoReducer,
  }),
  initialState,
);

export default store;
