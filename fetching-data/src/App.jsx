import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [excuse, setExcuse] = useState('');

  const getExcuse = async (type) => {
    const response = await axios.get(
      `https://excuser-three.vercel.app/v1/excuse/${type}`
    );

    setExcuse(response.data[0].excuse);
  };

  return (
    <>
      <h1>Get a excuse</h1>

      <ul className="list-excuses">
        <li>
          <button onClick={() => getExcuse('funny')}>Funny</button>
        </li>

        <li>
          <button onClick={() => getExcuse('unbelievable')}>
            Unbelievable
          </button>
        </li>

        <li>
          <button onClick={() => getExcuse('developers')}>Developers</button>
        </li>
      </ul>

      <p>{excuse}</p>
    </>
  );
}

export default App;
