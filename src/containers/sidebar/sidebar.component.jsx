import React from "react";
import Navbar from "containers/navbar";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "database";
const Sidebar = (props) => {
  const currentUser = useSelector((state) => state.users.user);

  const signOut = () => {
    auth.signOut();
    props.logoutThunk();
  };
  return (
    <div>
      <Navbar navigation="/" postAdd="home" />
      <div className="flex flex-col">
        <div className="flex items-center">
          <img
            src={currentUser.avatar_link}
            alt=""
            className="rounded-full h-12 w-12"
          />
          <div>{currentUser.username}</div>
        </div>
        <div>
          <Link to={`/${currentUser.username}-posts`}>Your posts</Link>
        </div>
        <div>
          {" "}
          <Link to={`/${currentUser.username}-vote-history`}>Your votes</Link>
        </div>
        <button className="bg-blue w-full bg-red-600" onClick={signOut}>
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
