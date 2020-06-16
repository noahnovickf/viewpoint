import { userSignedIn, userLogout, avatarFetched } from "../actions/users";

import { db, storage } from "database";

//CREATE NEW USER
export const handleNewUser = (res) => (dispatch) => {
  const uniqueId = res.user.uid;
  const userObject = {
    email: res.user.email,
    username: "",
    posts: [],
    full_name: res.user.displayName,
    avatar_link: "",
    userId: uniqueId,
    vote_history: [],
  };
  db.collection("users").doc(uniqueId).set(userObject);
  dispatch(userSignedIn(userObject));
};

//LOGOUT
export const logout = () => (dispatch) => {
  dispatch(userLogout());
};

export const addUsernameToState = (info) => (dispatch) => {
  db.collection("users")
    .doc(info.id)
    .update({ username: info.username })
    .then(() => {
      db.collection("users")
        .doc(info.id)
        .get()
        .then((res) => {
          dispatch(userSignedIn(res.data()));
        });
    })
    .catch(console.error);
};

export const uploadProfileAvatar = ({ image, username }) => (dispatch) => {
  storage.ref(`/avatars/${username}`).put(image);
};

export const fetchUserAvatar = ({ username }) => (dispatch) => {
  storage
    .ref(`avatars/${username}`)
    .getDownloadURL()
    .then((avatarUrl) => {
      dispatch(avatarFetched(avatarUrl));
    })
    .catch(console.error);
};

export const addUserToState = (info) => (dispatch) => {
  db.collection("users")
    .doc(info.uid)
    .get()
    .then((res) => {
      dispatch(userSignedIn(res.data()));
    });
};

// HELPER FUNCTION
export const handleReturningUserSignIn = async (response) => {
  const uniqueUserId = response.user.uid;
  const userQuery = await db.collection("users").doc(uniqueUserId).get();

  const user = userQuery.data();
  return user;
};
