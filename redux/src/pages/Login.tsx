import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { login, logout } from '../store';

export default function Login() {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();
  const name = useSelector((state: any) => state.user.value.username);

  return (
    <>
      <h1>{name}</h1>

      <form>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            dispatch(login({ username }));
          }}
        >
          Login
        </button>
        <button
          type="reset"
          onClick={(e) => {
            e.preventDefault();
            dispatch(logout());
          }}
        >
          Logout
        </button>
      </form>

      <Link to="/">Home</Link>
    </>
  );
}
