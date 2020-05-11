import React from "react";
import { auth } from "database";
import { updateUser } from "database/updateUser";
const Profile = () => {
  return (
    <div>
      <h1>Submit a username</h1>
      <input
        type="test"
        placeholder="username"
        id="username"
        className="border flex justify-center"
      ></input>
      <button
        className="bg-blue w-full bg-purple-600 mt-2"
        onClick={() => {
          updateUser(
            auth.currentUser.uid,
            document.getElementById("username").value
          );
        }}
      >
        Update
      </button>
    </div>
  );
};

export default Profile;
