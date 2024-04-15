// frontend/src/components/UsersList/UsersList.js

import React, { useState, useEffect } from 'react';
import api from '../services/api';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from backend API
    api.get('/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users', error));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.user_id}>
            {user.user_username} - {user.user_email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
