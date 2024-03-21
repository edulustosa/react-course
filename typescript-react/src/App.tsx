import './App.css';
import Person, { Country } from './Person';

function App() {
  return (
    <Person
      name="Eduardo"
      email="eduardo@eduardo.com"
      age={20}
      isMarried={false}
      friends={['André', 'Izaac', 'Kitharo']}
      country={Country.Brazil}
    />
  );
}

export default App;
