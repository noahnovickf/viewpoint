import React, { useEffect, useState } from "react";
import Home from "./containers/home";
import Login from "./containers/login";
import { useSelector } from "react-redux";
import { auth } from "database";
import Profile from "containers/profile";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(userFromState);
  }, []);

  const userFromState = useSelector((state) => state.users.user);

  const isUserLoggedIn = useSelector((state) => state.users.user.full_name);

  const firstTimeUser = useSelector((state) => state.users.user.username);
  if (!isUserLoggedIn) {
    return (
      <div className="flex justify-center items-center">
        <Login />
      </div>
    );
  } else {
    if (!firstTimeUser) {
      return (
        <div className="flex justify-center items-center">
          <Profile />
        </div>
      );
    } else {
      return (
        <div className="flex justify-center items-center">
          <Home />
        </div>
      );
    }
  }
}

export default App;
