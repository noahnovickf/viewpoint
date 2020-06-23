import { db } from "./index";

export const checkUserExistance = ({ email }) =>
  db
    .collection("users")
    .where("email", "==", email)
    .limit(1)
    .get()
    .then((res) => {
      return res.docs[0].exists;
    });
