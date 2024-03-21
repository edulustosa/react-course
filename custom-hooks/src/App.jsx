import './App.css';
import useCounter from './useCounter';

function App() {
  const { counter, addCounter, subCounter, multCounter, divCounter } =
    useCounter(10);

  return (
    <>
      <h1>{counter}</h1>

      <button onClick={() => addCounter(3)}>Add</button>
      <button onClick={() => subCounter(4)}>Sub</button>
      <button onClick={() => multCounter(5)}>Mult</button>
      <button onClick={() => divCounter(3)}>Div</button>
    </>
  );
}

export default App;
