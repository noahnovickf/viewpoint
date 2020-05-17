import { db } from "database";
import firebase from "firebase";

export const voteForOption = ({ optionName, postId }) => {
  const increment = firebase.firestore.FieldValue.increment(1);
  db.collection("posts")
    .doc(postId)
    .update({ [optionName]: increment });
};
