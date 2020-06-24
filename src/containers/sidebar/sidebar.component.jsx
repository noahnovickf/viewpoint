import React from "react";
import Navbar from "containers/navbar";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "database";
const Sidebar = (props) => {
  const { logout } = props;
  const currentUser = useSelector((state) => state.users.user);
  const signOut = () => {
    auth.signOut();
    logout();
  };
  return (
    <div>
      <Navbar navigation="/" topRightIcon="home" />
      <div className="flex flex-col font-noto text-grayy bg-blueGray h-screen w-screen text-center text-xl tracking-wide">
        <div className="flex items-center justify-center border-b-2 border-grayy">
          <img
            src={currentUser.avatar_link}
            alt="User avatar"
            className="rounded-full h-12 w-12 p-2"
          />
          <div>{currentUser.username}</div>
        </div>
        <div className="py-2 border-b-2 border-grayy">
          <Link to={`user/${currentUser.username}/posts`}>Posts</Link>
        </div>
        <div className="py-2 border-b-2 border-grayy ">
          <Link to={`/user/${currentUser.username}/vote-history`}>Votes</Link>
        </div>
        <button
          className=" py-2 bg-bluey rounded-md mx-12 mt-4"
          onClick={signOut}
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;