import { db } from "database";

export const usernameCheck = async (potentialUsername) => {
  const snapshot = await db.collection("users").get();
  const usernameArr = [];
  snapshot.forEach((user) => {
    usernameArr.push(user.data().username);
  });
  if (usernameArr.includes(potentialUsername)) {
    return false;
  } else {
    return true;
  }
};
