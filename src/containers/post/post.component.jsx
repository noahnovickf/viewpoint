import React from "react";
import { voteForOptA, voteForOptB } from "database/votePost";

const Post = (props) => {
  console.log(props);
  return (
    <li className="rounded border-4 border-orange-600 mt-2">
      <h6>{props.body}</h6>
      {/* <p>{props.created_at}</p> */}
      <button onClick={() => voteForOptA(props)}>{props.option_a_name}</button>
      <button onClick={() => voteForOptB(props)}>{props.option_b_name}</button>
    </li>
  );
};

export default Post;
