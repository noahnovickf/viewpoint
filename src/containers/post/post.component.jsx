import React from "react";
import { voteForOption } from "database/votePost";

const Post = (props) => {
  console.log(props);
  return (
    <li className="rounded border-4 border-orange-600 mt-2">
      <h6>{props.body}</h6>
      {/* <p>{props.created_at}</p> */}
      <button onClick={() => voteForOption(true, props)}>
        {props.optionAName}
      </button>
      <button onClick={() => voteForOption(false, props)}>
        {props.optionBName}
      </button>
    </li>
  );
};

export default Post;
