// App.jsx
import React from "react";
import { UserProvider } from "./UserContext";
import UserProfile from "./components/UserProfile";
import UpdateUser from "./components/UpdateUser";

const App = () => {
  return (
    <UserProvider>
      <div>
        <h1>User Data</h1>
        <UserProfile />
        <UpdateUser />
      </div>
    </UserProvider>
  );
};

export default App;
