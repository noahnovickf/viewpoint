import { db } from "./index";

export const addPost = ({
  postTitle,
  postText,
  option1,
  option2,
  userID,
  username,
  picID,
  imgPost,
}) => {
  return db.collection("posts").add({
    title: postTitle,
    body: postText,
    picID: picID,
    created_at: Date.now(),
    option_a_name: option1,
    option_b_name: option2,
    option_a: [],
    option_b: [],
    owner_id: userID,
    total_votes: 0,
    owner_username: username,
    img_post: imgPost,
  });
};
