import React from "react";
import { auth } from "database";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";

const Profile = (props) => {
  const userFromState = useSelector((state) => state.users.user);

  const updateUserInfo = () => {
    const userWithUsername = {
      id: auth.currentUser.uid,
      username: document.getElementById("username").value,
      user: userFromState,
    };
    props.addUsernameToStateThunk(userWithUsername);
  };

  return (
    <div className="bg-opacity-50	">
      <h1>Submit a username</h1>
      <input
        type="test"
        placeholder="username"
        id="username"
        className="border flex justify-center"
      ></input>
      <button
        className="bg-blue w-full bg-purple-600 mt-2"
        onClick={updateUserInfo}
      >
        Update
      </button>
    </div>
  );
};

export default Profile;
