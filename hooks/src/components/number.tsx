import { useContext } from 'react';

import { CountContext } from '../context/count-context-provider';

const NumberComponent = () => {
  const { state } = useContext(CountContext);

  return <div>{state.count}</div>;
};

export default NumberComponent;
