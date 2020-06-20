import { db } from "./index";

export const addPost = (body, opt1, opt2, userId, username, avatarLink) => {
  db.collection("posts").add({
    body: body,
    created_at: Date.now(),
    option_a_name: opt1,
    option_b_name: opt2,
    option_a: [],
    option_b: [],
    owner_id: userId,
    total_votes: 0,
    owner_username: username,
    owner_img: avatarLink,
  });
};
