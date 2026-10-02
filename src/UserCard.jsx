import React from 'react';

function UserCard({ avatar, firstName, lastName, email }) {
  return (
    <div className="card">
      <img src={avatar} alt={`${firstName} ${lastName}`} className="avatar" />
      <div className="card-info">
        <h3>{firstName} {lastName}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default UserCard;