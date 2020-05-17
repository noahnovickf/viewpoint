import React from "react";
import { voteForOption } from "database/votePost";

const Post = (props) => {
  console.log(props);
  return (
    <li className="rounded border-4 border-orange-600 mt-2">
      <h6>{props.body}</h6>
      {/* <p>{props.created_at}</p> */}
      <div className="flex justify-center">
        <button
          className="bg-gray-300 hover:bg-gray-400 w-20 h-10 rounded-l-lg border-r-2 border-gray-600"
          onClick={() =>
            voteForOption({ optionName: "option_a", postId: props.id })
          }
        >
          {props.optionAName}
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 w-20 h-10 rounded-r-lg "
          onClick={() =>
            voteForOption({ optionName: "option_b", postId: props.id })
          }
        >
          {props.optionBName}
        </button>
      </div>
    </li>
  );
};

export default Post;
