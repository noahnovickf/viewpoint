import React, { useState } from "react";
import { addPost } from "database/addPost";
import { withRouter } from "react-router-dom";
import Navbar from "containers/navbar";
import { useSelector } from "react-redux";
import Sidebar from "containers/sidebar";
import { storage } from "database";

const CreatePost = ({ history, sidebarToggle, logout }) => {
  const [postText, setPostText] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [imageOption1, setImageOption1] = useState("");
  const [imageOption2, setImageOption2] = useState("");
  const [pictureUpload, setPictureUpload] = useState(false);
  const showSidebar = useSelector((state) => state.sidebarView.sidebarView);
  const user = useSelector((state) => state.users.user);
  const userID = user.userId;
  const username = user.username;

  const addPostToDB = () => {
    if (pictureUpload && (!imageOption1 || !imageOption2)) {
      alert("Please upload 2 images");
    } else if (!pictureUpload && !postText) {
      alert("Please complete post with text");
    } else if (!option1 || !option2) {
      alert("Please fill in options");
    } else {
      let imgPost = false;
      const picID = parseInt(Math.random() * 1000000000000).toString();

      if (imageOption1 && imageOption2) {
        imgPost = true;
        storage
          .ref(`/posts/${picID}-01`)
          .put(imageOption1)
          .then(() => {
            storage.ref(`/posts/${picID}-02`).put(imageOption2);
          });
      }
      addPost({
        postText,
        option1,
        option2,
        userID,
        username,
        picID,
        imgPost,
      });
      setPostText("");
      setOption1("");
      setOption2("");
      history.push("/");
    }
  };

  return (
    <div className="bg-blueGray h-screen">
      <div>
        <Navbar
          navigation="/"
          topRightIcon="home"
          sidebarView={sidebarToggle}
        />
      </div>
      <div className="flex flex-no-wrap">
        <div
          className={` ${
            showSidebar
              ? "transition-all duration-500 w-2/3 -mr-56 z-10 border-r-2 border-grayy"
              : "transition-all duration-500 w-0 z-10 overflow-hidden"
          }`}
        >
          <Sidebar logout={logout} sidebarView={sidebarToggle} />
        </div>
        <div
          onClick={() => sidebarToggle({ toggleView: false })}
          className={`block h-screen text-grayy font-noto tracking-wide p-2 ${
            showSidebar
              ? "opacity-50 z-0"
              : " transition-width duration-500 w-screen z-10 bg-blueGray"
          } `}
        >
          <div>
            <div className="flex justify-between text-xl">
              <button
                onClick={() => setPictureUpload(false)}
                className={`${
                  pictureUpload ? "bg-bluey opacity-50" : ""
                } w-1/2 rounded-t-lg rounded-l-lg py-2`}
              >
                Text
              </button>
              <button
                onClick={() => setPictureUpload(true)}
                className={`${
                  pictureUpload ? "" : "bg-bluey opacity-50"
                } w-1/2 rounded-t-lg rounded-r-lg py-2`}
              >
                Pictures
              </button>
            </div>
            <div className="pt-2">
              <textarea
                id="post"
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                className={`${
                  pictureUpload ? "hidden" : ""
                } border rounded-lg flex justify-center w-full h-32 text-bluey`}
                type="text"
                placeholder=" Post body"
              ></textarea>
            </div>
            <div className={`${pictureUpload ? "" : "hidden"} `}>
              <input
                type="file"
                onChange={(e) => setImageOption1(e.target.files[0])}
              />
              <input
                type="file"
                onChange={(e) => setImageOption2(e.target.files[0])}
              />
            </div>
          </div>
          <div className="flex w-full pt-4 w-auto">
            <input
              id="option-1"
              value={option1}
              onChange={(e) => setOption1(e.target.value)}
              className="bg-pinky h-10 rounded-l-lg border-r-2 border-gray-600 placeholder-bluey placeholder-opacity-75 text-bluey w-1/2 focus:placeholder-opacity-25 focus:outline-none"
              type="text"
              placeholder=" Option 1"
              maxLength="13"
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
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CreatePost);
