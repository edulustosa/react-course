import { useContext } from 'react';
import ChangeProfile from '../components/ChangeProfile';
import { AppContext } from '../App';

function Profile() {
  const { username } = useContext(AppContext);

  return (
    <div>
      This is your profile {username}
      <ChangeProfile />
    </div>
  );
}

export default Profile;
