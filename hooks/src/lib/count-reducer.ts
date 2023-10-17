import {
  CountActionTypes,
  CountAction,
  CountState,
} from '../types/count-reducer-types';

export function countReducer(state: CountState, action: CountAction) {
  const { type, payload } = action;
  switch (type) {
    case CountActionTypes.INCREAMENT:
      return {
        ...state,
        count: state.count + payload,
      };
    case CountActionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return state;
  }
}
