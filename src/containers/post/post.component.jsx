import React from "react";
import { voteForOption } from "database/votePost";

const Post = (props) => {
  console.log(props);
  return (
    <li className="rounded border-4 border-orange-600 mt-2">
      <h6>{props.body}</h6>
      {/* <p>{props.created_at}</p> */}
      <button
        onClick={() =>
          voteForOption({ optionName: "option_a", postId: props.id })
        }
      >
        {props.optionAName}
      </button>
      <button
        onClick={() =>
          voteForOption({ optionName: "option_b", postId: props.id })
        }
      >
        {props.optionBName}
      </button>
    </li>
  );
};

export default Post;
