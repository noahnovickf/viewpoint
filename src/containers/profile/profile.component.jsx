import React, { useState } from "react";
import { auth } from "database";
import { useSelector } from "react-redux";

const Profile = (props) => {
  const { addUsernameToStateThunk, uploadProfileAvatarThunk } = props;
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
      addUsernameToStateThunk(userWithUsername);
      uploadProfileAvatarThunk({ image: imageAsFile, username });

      //TODO: Need to show user that this is successful or has failed
    }
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };

  return (
    <div className="flex flex-col text-grayy">
      <div className="py-4">
        <h1>Submit a username</h1>
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border flex justify-center text-bluey"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      <div className="py-4">
        <h1>Submit an avatar</h1>
        <input type="file" onChange={handleImageChange} />
      </div>

      <button
        className="text-bluey rounded-lg bg-orangy h-10 w-full mt-2"
        onClick={updateUserInfo}
      >
        Update
      </button>
    </div>
  );
};

export default Profile;
