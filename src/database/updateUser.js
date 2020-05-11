import { db } from "./index";

export const updateUser = (id, username) => {
  db.collection("users").doc(id).set({ username: username }, { merge: true });
};
