import { db } from "./index";

export const addPost = ({
  postText,
  option1,
  option2,
  userID,
  username,
  int,
  imgPost,
}) => {
  db.collection("posts").doc(int).set({
    body: postText,
    // option_1_image: "",
    // option_2_image: "",
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
