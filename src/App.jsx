import React, { useState } from 'react';
import usersData from './data.json';
import UserCard from './UserCard';
import './App.css';

function App() {
  const [users] = useState(usersData);

  return (
    <div className="app-container">
      <h1>User Card Assignment</h1>
      <p className="description">
        User Profiles
      </p>

      <div className="grid-container">
        {users.map((user) => (
          <UserCard
            key={user.id}
            avatar={user.avatar}
            firstName={user.first_name}
            lastName={user.last_name}
            email={user.email}
          />
        ))}
      </div>
    </div>
  );
}

export default App;