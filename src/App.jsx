import React, { useEffect, useState } from "react";
import Home from "./containers/home";
import Login from "./containers/login";
import { useSelector } from "react-redux";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(userFromState);
  }, []);

  const userFromState = useSelector((state) => state.users.user);

  return !userFromState.full_name ? (
    <div className="flex justify-center items-center">
      <Login />
    </div>
  ) : (
    <div className="flex justify-center items-center">
      <Home />
    </div>
  );
}

export default App;
