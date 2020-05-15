import React, { useState } from "react";
import { addPost } from "database/addPost";

const CreatePost = () => {
  const [body, setBody] = useState("");
  const [opt1, setOpt1] = useState("");
  const [opt2, setOpt2] = useState("");

  const addPostToDB = () => {
    addPost(body, opt1, opt2);
    document.getElementById("post").value = "";
    document.getElementById("option-1").value = "";
    document.getElementById("option-2").value = "";
  };

  return (
    <div className="border flex justify-center">
      <div>
        <h3>Argument here</h3>
        <input
          id="post"
          onChange={(e) => setBody(e.target.value)}
          className="border flex justify-center"
          type="text"
          placeholder="Type some post"
        ></input>
      </div>
      <div>
        <h3>Option 1</h3>
        <input
          id="option-1"
          onChange={(e) => setOpt1(e.target.value)}
          className="border flex justify-center"
          type="text"
          placeholder="Option 1"
        ></input>
      </div>
      <div>
        <h3>Option 2</h3>
        <input
          id="option-2"
          onChange={(e) => setOpt2(e.target.value)}
          className="border flex justify-center"
          type="text"
          placeholder="Option2"
        ></input>
      </div>

      <button
        className="bg-blue w-full bg-purple-600 mt-2"
        onClick={addPostToDB}
      >
        POST IT
      </button>
    </div>
  );
};

export default CreatePost;
