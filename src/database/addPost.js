import { db } from "./index";

export const addPost = (body) => {
  db.collection("posts").add({
    body: body,
    created_at: Date.now(),
    up: 0,
    down: 0,
    id: "",
  });
};
