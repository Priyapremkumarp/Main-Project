// UserProfile.js
import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <>
          <p>Name: {user.firstName} {user.lastName}</p>
          <p>Email: {user.email}</p>
          {/* Add more details as needed */}
        </>
      ) : (
        <p>User information not available</p>
      )}
    </div>
  );
};

export default UserProfile;
