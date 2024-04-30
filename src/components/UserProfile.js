import React, { useState } from 'react';
import styled from 'styled-components';

const UserProfileContainer = styled.div`
  /* Add your styles here */
  max-width: 400px;
  margin: 0 auto;
`;

const ProfileSection = styled.div`
  /* Add your styles here */
  margin-bottom: 20px;
`;

const ProfileLabel = styled.label`
  /* Add your styles here */
  font-weight: bold;
  margin-right: 10px;
`;

const ProfileInput = styled.input`
  /* Add your styles here */
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const SaveButton = styled.button`
  /* Add your styles here */
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    profilePicture: "profile.jpg"
  });

  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const saveProfile = () => {
    setUser({ ...updatedUser });
    setEditing(false);
  };

  return (
    <UserProfileContainer>
      <h2>User Profile</h2>
      {editing ? (
        <div>
          <ProfileSection>
            <ProfileLabel>Name:</ProfileLabel>
            <ProfileInput type="text" name="name" value={updatedUser.name} onChange={handleInputChange} />
          </ProfileSection>
          <ProfileSection>
            <ProfileLabel>Email:</ProfileLabel>
            <ProfileInput type="email" name="email" value={updatedUser.email} onChange={handleInputChange} />
          </ProfileSection>
          <ProfileSection>
            <ProfileLabel>Profile Picture:</ProfileLabel>
            <ProfileInput type="file" accept="image/*" name="profilePicture" onChange={handleInputChange} />
          </ProfileSection>
          <SaveButton onClick={saveProfile}>Save</SaveButton>
        </div>
      ) : (
        <div>
          <ProfileSection>
            <strong>Name:</strong> {user.name}
          </ProfileSection>
          <ProfileSection>
            <strong>Email:</strong> {user.email}
          </ProfileSection>
          <ProfileSection>
            <strong>Profile Picture:</strong> <img src={user.profilePicture} alt="Profile" />
          </ProfileSection>
          <SaveButton onClick={() => setEditing(true)}>Edit</SaveButton>
        </div>
      )}
    </UserProfileContainer>
  );
};

export default UserProfile;
