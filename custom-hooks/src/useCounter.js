import { useState } from 'react';

function useCounter(inicialState = 0) {
  const [counter, setCounter] = useState(inicialState);

  const addCounter = (value = 1) => setCounter(counter + value);
  const subCounter = (value = 1) => setCounter(counter - value);
  const multCounter = (value = 2) => setCounter(counter * value);
  const divCounter = (value = 2) => setCounter(counter / value);

  return { counter, addCounter, subCounter, multCounter, divCounter };
}

export default useCounter;
