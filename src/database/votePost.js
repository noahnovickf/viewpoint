import { db } from "database";
import firebase from "firebase";

export const voteForOption = ({ optionName, postId, userId }) => {
  db.collection("posts")
    .doc(postId)
    .update({
      [optionName]: firebase.firestore.FieldValue.arrayUnion(userId),
    });
};
