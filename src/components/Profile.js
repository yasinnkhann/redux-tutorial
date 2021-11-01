import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice.js';
import { selectTheme } from '../features/themeSlice.js';

function Profile() {
  const user = useSelector(selectUser);
  const themeColor = useSelector(selectTheme);

  return (
    <div style={{ color: themeColor }}>
      <h1> Profile Page</h1>
      <p> Name: {user.name} </p>
      <p> Age: {user.age}</p>
      <p> Email: {user.email}</p>
    </div>
  );
}

export default Profile;
