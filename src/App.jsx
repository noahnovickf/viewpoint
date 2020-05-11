import React, { useEffect, useState } from "react";
import Home from "./containers/home";
import Login from "./containers/login";
import { useSelector } from "react-redux";
import { auth } from "database";
import Profile from "containers/profile/profile.component";

function App() {
  console.log();
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(userFromState);
  }, []);

  const userFromState = useSelector((state) => state.users.user);
  return !userFromState.full_name ? (
    <div className="flex justify-center items-center">
      <Login />
    </div>
  ) : !userFromState.username ? (
    <div className="flex justify-center items-center">
      <Profile />
    </div>
  ) : (
    <div className="flex justify-center items-center">
      <Home />
    </div>
  );
}

export default App;
