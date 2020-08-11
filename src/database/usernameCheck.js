import { db } from "database";

export const usernameCheck = async (u) => {
  const snapshot = await db.collection("users").get();
  const usernameArr = [];
  snapshot.forEach((user) => {
    usernameArr.push(user.data().username);
    // if (user.data().username === u) {
    //   return false;
    // } else {
    //   return true;
    // }
  });
  // console.log(usernameArr);
  if (usernameArr.includes(u)) {
    return false;
  } else {
    return true;
  }
};
