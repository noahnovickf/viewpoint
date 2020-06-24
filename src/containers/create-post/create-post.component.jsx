import React, { useState } from "react";
import { addPost } from "database/addPost";
import { withRouter } from "react-router-dom";
import Navbar from "containers/navbar";
import { useSelector } from "react-redux";
import Sidebar from "containers/sidebar";

const CreatePost = (props) => {
  const [postText, setPostText] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const user = useSelector((state) => state.users.user);
  const userID = user.userId;
  const username = user.username;
  const avatarLink = user.avatar_link;
  const showSidebar = useSelector((state) => state.sidebarView.sidebarView);

  const addPostToDB = () => {
    addPost({ postText, option1, option2, userID, username, avatarLink });
    setPostText("");
    setOption1("");
    setOption2("");
    props.history.push("/");
  };

  return (
    <div>
      <div>
        <Navbar
          navigation="/"
          topRightIcon="home"
          sidebarView={props.sidebarToggle}
        />
      </div>
      <div className="flex flex-no-wrap">
        <div
          className={`${
            showSidebar
              ? " transition-all duration-500 w-2/3"
              : " transition-all duration-500 w-0 "
          }`}
        >
          <Sidebar logout={props.logout} />
        </div>
        <div className="flex flex-col bg-blueGray h-screen text-grayy font-noto tracking-wide">
          <div className=" p-4">
            <div>
              <textarea
                id="post"
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                className="border rounded-lg flex justify-center w-full h-32 text-bluey"
                type="text"
                placeholder=" Post body"
              ></textarea>
            </div>
            <div className="flex w-full pt-4 w-auto">
              <input
                id="option-1"
                value={option1}
                onChange={(e) => setOption1(e.target.value)}
                className="bg-pinky h-10 rounded-l-lg border-r-2 border-gray-600 placeholder-bluey placeholder-opacity-75 text-bluey w-1/2 focus:placeholder-opacity-25 focus:outline-none"
                type="text"
                placeholder=" Option 1"
                maxlength="13"
              ></input>
              <input
                id="option-2"
                value={option2}
                onChange={(e) => setOption2(e.target.value)}
                className="bg-orangy h-10 rounded-r-lg text-bluey placeholder-bluey placeholder-opacity-75 w-1/2 focus:placeholder-opacity-25 focus:outline-none"
                type="text"
                placeholder=" Option 2"
                maxlength="13"
              ></input>
            </div>
            <button
              className="bg-bluey w-full mt-4 rounded-lg"
              onClick={addPostToDB}
            >
              Define it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CreatePost);
