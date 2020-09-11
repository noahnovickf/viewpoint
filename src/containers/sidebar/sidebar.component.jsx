import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "database";

const Sidebar = ({ logout, sidebarView, fetchLatestPosts }) => {
  const showSidebar = useSelector((state) => state.sidebarView.sidebarView);
  const currentUser = useSelector((state) => state.users.user);
  const currentUserID = currentUser.id;

  const signOut = () => {
    sidebarView({ toggleView: !showSidebar });
    auth.signOut();
    logout();
  };

  return (
    <div>
      <div className="flex flex-col text-grayy bg-blueGray h-screen w-full text-center text-xl tracking-wide ">
        <div className="flex items-center justify-center border-b-2 border-grayy min-w-full flex-grow-0">
          <img
            src={currentUser.avatar_link}
            alt="User avatar"
            className="rounded-full h-12 w-12 p-2 "
          />
          <div>{currentUser.username}</div>
        </div>
        <div
          onClick={() => sidebarView({ toggleView: !showSidebar })}
          className="py-2 border-b-2 border-grayy"
        >
          <Link to={`/user/${currentUser.username}/posts`}>Posts</Link>
        </div>
        <div
          onClick={() => sidebarView({ toggleView: !showSidebar })}
          className="py-2 border-b-2 border-grayy "
        >
          <Link to={`/user/${currentUser.username}/vote-history`}>Votes</Link>
        </div>
        <button
          className=" py-2 px-4 bg-bluey rounded-md mx-12 mt-4 "
          onClick={signOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
