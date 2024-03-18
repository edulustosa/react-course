import { useContext } from 'react';
import { AppContext } from '../App';

function Home() {
  const { username } = useContext(AppContext);
  return <h1>This is the home page. Hello {username}!</h1>;
}

export default Home;
