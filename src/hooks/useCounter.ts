import { useReducer } from 'react';

type Increment = { type: 'INCREMENT' };
type Decrement = { type: 'DECREMENT' };
type Reset = { type: 'RESET' };
type Update = { type: 'UPDATE'; payload: number };
type Action = Increment | Decrement | Reset | Update;

function counterReducer(initalValue: number) {
  return function (state: number, action: Action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      case 'RESET':
        return initalValue;
      case 'UPDATE':
        return action.payload;
    }
  };
}

export function useCounter(initalValue = 0) {
  const [state, dispatch] = useReducer(
    counterReducer(initalValue),
    initalValue,
  );
  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const reset = () => dispatch({ type: 'RESET' });
  const update = (payload: number) => dispatch({ type: 'UPDATE', payload });
  return [state, { increment, decrement, reset, update }] as const;
}
