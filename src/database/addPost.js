import { db } from "./index";
import firebase from "firebase";

export const addPost = (body, opt1, opt2, userId) => {
  db.collection("posts").add({
    body: body,
    created_at: firebase.database.ServerValue.TIMESTAMP,
    option_a_name: opt1,
    option_b_name: opt2,
    option_a: [],
    option_b: [],
    id: "",
    owner_id: userId,
  });
};
