import React, { useState } from "react";
import { auth } from "database";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";

const Profile = (props) => {
  const [username, setUsername] = useState("");
  const userFromState = useSelector((state) => state.users.user);

  const updateUserInfo = () => {
    const userWithUsername = {
      id: auth.currentUser.uid,
      username: username,
      user: userFromState,
    };
    props.addUsernameToStateThunk(userWithUsername);
  };

  return (
    <div>
      <h1>Submit a username</h1>
      <input
        type="text"
        placeholder="username"
        id="username"
        className="border flex justify-center"
        onChange={(e) => setUsername(e.target.value)}
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
