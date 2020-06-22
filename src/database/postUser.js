import { db, storage } from "database";

export const fetchPostUser = (uid) =>
  db
    .collection("users")
    .doc(uid)
    .get()
    .then((res) => {
      return res.data();
    });

export const fetchPostUserAvatar = (username) =>
  storage
    .ref(`avatars/${username}`)
    .getDownloadURL()
    .then((avatarUrl) => {
      return avatarUrl;
    });
