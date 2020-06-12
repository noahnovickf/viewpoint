import { db } from "database";
import firebase from "firebase";

export const voteForOption = ({ optionName, postId, userId }) => {
  console.log("hit", optionName, postId);
  db.collection("posts")
    .doc(postId)
    .update({
      [optionName]: firebase.firestore.FieldValue.arrayUnion(userId),
    });
  db.collection("users")
    .doc(userId)
    .update({
      vote_history: firebase.firestore.FieldValue.arrayUnion(postId),
    });
};
