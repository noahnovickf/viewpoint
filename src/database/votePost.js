import { db } from "database";

export const voteForOptA = (postObj) => {
  db.collection("posts")
    .doc(postObj.id)
    .update({ option_a: postObj.optionA + 1 });
};

export const voteForOptB = (postObj) => {
  db.collection("posts")
    .doc(postObj.id)
    .update({ option_b: postObj.optionB + 1 });
};
