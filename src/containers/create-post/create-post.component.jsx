import React, { useState } from "react";
import { addPost } from "database/addPost";
import { withRouter } from "react-router-dom";

const CreatePost = (props) => {
  const [postText, setPostText] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");

  const addPostToDB = () => {
    addPost(postText, option1, option2);
    setPostText("");
    setOption1("");
    setOption2("");
    props.history.push("/");
  };

  return (
    <div className="border flex justify-center">
      <div>
        <h3>Argument here</h3>
        <input
          id="post"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          className="border flex justify-center"
          type="text"
          placeholder="Type some post"
        ></input>
      </div>
      <div>
        <h3>Option 1</h3>
        <input
          id="option-1"
          value={option1}
          onChange={(e) => setOption1(e.target.value)}
          className="border flex justify-center"
          type="text"
          placeholder="Option 1"
        ></input>
      </div>
      <div>
        <h3>Option 2</h3>
        <input
          id="option-2"
          value={option2}
          onChange={(e) => setOption2(e.target.value)}
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

export default withRouter(CreatePost);
