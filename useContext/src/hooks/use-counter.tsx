import { useContext } from 'react';
import { CountContext } from '../context/counter-context-provider';

const useCounter = () => {
  return useContext(CountContext);
};

export default useCounter;
