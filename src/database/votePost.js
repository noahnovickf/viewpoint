import { db } from "database";

export const voteForOptA = (postObj) => {
  db.collection("posts")
    .doc(postObj.id)
    .update({ option_a: postObj.option_a + 1 });
};

export const voteForOptB = (postObj) => {
  db.collection("posts")
    .doc(postObj.id)
    .update({ option_b: postObj.option_b + 1 });
};
