import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/userSlice.js';

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({ name: 'Yasin', age: 23, email: 'yasinkhan500@gmail.com' })
          );
        }}
      >
        Login
      </button>

      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        LOGOUT
      </button>
    </div>
  );
}

export default Login;
