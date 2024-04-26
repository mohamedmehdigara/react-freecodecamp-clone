import React, { useState } from 'react';

const UserProfile = () => {
  // Sample user data (You can fetch actual data from an API or use state)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    profilePicture: "profile.jpg"
  });

  // State for editing profile
  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ ...user });

  // Handle input change for editing profile
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  // Save changes to profile
  const saveProfile = () => {
    setUser({ ...updatedUser });
    setEditing(false);
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      {editing ? (
        <div>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={updatedUser.name} onChange={handleInputChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={updatedUser.email} onChange={handleInputChange} />
          </div>
          <div>
            <label>Profile Picture:</label>
            <input type="file" accept="image/*" name="profilePicture" onChange={handleInputChange} />
          </div>
          <button onClick={saveProfile}>Save</button>
        </div>
      ) : (
        <div>
          <div>
            <strong>Name:</strong> {user.name}
          </div>
          <div>
            <strong>Email:</strong> {user.email}
          </div>
          <div>
            <strong>Profile Picture:</strong> <img src={user.profilePicture} alt="Profile" />
          </div>
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
