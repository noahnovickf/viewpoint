import React from "react";
import Navbar from "containers/navbar";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const currentUser = useSelector((state) => state.users.user.username);
  return (
    <div>
      <Navbar navigation="/" postAdd="home" />
      <div className="flex flex-col">
        <div>
          {/* avatar */}
          {/* username */}
        </div>
        <div>{/* Your posts */}</div>
        <Link to={`/${currentUser}-posts`}>Your posts</Link>
        <div>{/* vote history */}</div>
        <div>{/* signout */}</div>
      </div>
    </div>
  );
};

export default Sidebar;
