import { db } from "database";

export const voteForOptA = (postObj) => {
  console.log("hit");
  db.collection("posts")
    .doc(postObj.id)
    .update({ up: postObj.up + 1 });
};
