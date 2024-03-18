import { useState } from 'react';
import Text from './Text';
import './App.css';

function App() {
  const [showText, setShowText] = useState(false);

  return (
    <>
      <button onClick={() => setShowText(!showText)}>Show text</button>
      {showText && <Text />}
    </>
  );
}

export default App;
