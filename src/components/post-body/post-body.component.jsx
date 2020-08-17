import React from "react";

const PostBody = ({
  userData,
  postData,
  showVoteResults,
  handleVote,
  img1,
  img2,
}) => {
  const { body, postId, optionAName, optionBName } = postData;
  const { userId } = userData;

  return (
    <div>
      <h6
        className={`${
          img1 ? "hidden" : " "
        } text-grayy p-2 mx-2 mb-2 rounded-lg border border-grayy font-thin`}
      >
        {body}
      </h6>
      <div
        className={`${
          img1 ? "" : "hidden"
        } flex text-grayy p-2 mx-2 mb-2 rounded-lg border border-grayy font-thin overflow-x-auto`}
      >
        <img src={img1} className="rounded-l-lg h-picture w-picture" />
        <img src={img2} className="rounded-r-lg pr-2 h-picture w-picture" />
      </div>

      <div className="flex justify-center text-bluey ">
        <button
          className={`${
            showVoteResults ? "hidden" : "show"
          } bg-pinky w-20 h-10 rounded-l-lg border-r-2 border-gray-600 mb-2 w-1/3`}
          onClick={() =>
            handleVote({
              optionName: "option_a",
              postId,
              userId,
            })
          }
        >
          {optionAName}
        </button>
        <button
          className={`${
            showVoteResults ? "hidden" : "show"
          } bg-orangy w-20 h-10 rounded-r-lg mb-2 w-1/3`}
          onClick={() =>
            handleVote({
              optionName: "option_b",
              postId,
              userId,
            })
          }
        >
          {optionBName}
        </button>
      </div>
    </div>
  );
};

export default PostBody;
