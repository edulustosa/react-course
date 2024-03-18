import { useContext, useState } from 'react';
import { AppContext } from '../App';

function ChangeProfile() {
  const [newUsername, setNewUsername] = useState('');
  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <input type="text" onChange={(e) => setNewUsername(e.target.value)} />
      <button onClick={() => setUsername(newUsername)}>Change Username</button>
    </div>
  );
}

export default ChangeProfile;
