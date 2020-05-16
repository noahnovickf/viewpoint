import { db } from "database";

export const voteForOption = (option, postObj) => {
  if (option) {
    db.collection("posts")
      .doc(postObj.id)
      .update({ option_a: postObj.optionA + 1 });
  } else {
    db.collection("posts")
      .doc(postObj.id)
      .update({ option_b: postObj.optionB + 1 });
  }
};
