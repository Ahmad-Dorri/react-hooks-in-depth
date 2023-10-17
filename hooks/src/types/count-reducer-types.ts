export enum CountActionTypes {
  INCREAMENT = 'INCREAMENT',
  DECREMENT = 'DECREMENT',
}

export interface CountAction {
  type: CountActionTypes;
  payload: number;
}

export interface CountState {
  count: number;
}
