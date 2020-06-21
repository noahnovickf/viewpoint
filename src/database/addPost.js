import { db } from "./index";

export const addPost = ({
  postText,
  option1,
  option2,
  userID,
  username,
  avatarLink,
}) => {
  db.collection("posts").add({
    body: postText,
    created_at: Date.now(),
    option_a_name: option1,
    option_b_name: option2,
    option_a: [],
    option_b: [],
    owner_id: userID,
    total_votes: 0,
    owner_username: username,
    owner_img: avatarLink,
  });
};
