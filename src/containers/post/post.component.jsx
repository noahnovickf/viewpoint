import React from "react";
import { addPost } from "database/addPost";

const Post = () => {
  const addPostToDB = () => {
    addPost(document.getElementById("post").value);
    document.getElementById("post").value = "";
  };

  return (
    <div>
      <input
        id="post"
        className="border flex justify-center"
        type="text"
        placeholder="Type some post"
      ></input>
      <button
        className="bg-blue w-full bg-purple-600 mt-2"
        onClick={addPostToDB}
      >
        POST IT
      </button>
    </div>
  );
};

export default Post;
