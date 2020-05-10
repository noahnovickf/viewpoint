import { db } from "./index";

export const addPost = (body) => {
  db.collection("posts").add({
    body: body,
    created_at: Date.now(),
  });
};
