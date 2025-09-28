// UserProfile.jsx
import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext); 

  return (
    <div>
      <h2>User Profile</h2>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Age:</b> {user.age}</p>
    </div>
  );
};

export default UserProfile;
