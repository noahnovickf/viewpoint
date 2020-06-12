import React, { useState } from "react";

import { auth } from "database";
import { useSelector } from "react-redux";

const Profile = (props) => {
  const [username, setUsername] = useState("");
  const [imageAsFile, setImageAsFile] = useState("");
  const userFromState = useSelector((state) => state.users.user);

  const updateUserInfo = () => {
    if (!username || !imageAsFile) {
      alert("Please enter a username and upload an avatar");
    } else {
      const userWithUsername = {
        id: auth.currentUser.uid,
        username: username,
        user: userFromState,
      };
      props.addUsernameToStateThunk(userWithUsername);
      props.uploadProfileAvatarThunk({ image: imageAsFile, username });

      //TODO: Need to show user that this is successfull or has failed
    }
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
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

      <h1>Submit an avatar</h1>
      <input type="file" onChange={handleImageChange} />

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
