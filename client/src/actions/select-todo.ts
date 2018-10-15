import { SELECT_TODO } from './action-types';

export default (id: number) => ({
  type: SELECT_TODO,
  payload: id,
});
