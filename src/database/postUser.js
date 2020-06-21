import { db } from "./index";

export const fetchPostUser = (uid) =>
  db
    .collection("users")
    .doc(uid)
    .get()
    .then((res) => {
      return res.data();
    });
