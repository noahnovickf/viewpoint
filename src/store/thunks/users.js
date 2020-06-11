import { userSignedIn, userLogout, avatarFetched } from "../actions/users";

import { googlePopupSignInMethod, db, storage } from "database";

//CREATE NEW USER
export const signInWithGoogle = () => (dispatch) => {
  googlePopupSignInMethod().then((res) => {
    if (res.additionalUserInfo.isNewUser) {
      const uniqueId = res.user.uid;
      db.collection("users")
        .doc(uniqueId)
        .set({
          email: res.user.email,
          username: "",
          posts: [],
          full_name: res.user.displayName,
          avatar_link: "",
          userId: res.user.uid,
          vote_history: [],
        })
        .then(() => {
          handleReturningUserSignIn(res).then((user) => {
            dispatch(userSignedIn(user));
          });
        })
        .catch(console.error);
    } else {
      // Call a thunk here with payload of whatever the user in state needs to have
      handleReturningUserSignIn(res)
        .then((user) => {
          dispatch(userSignedIn(user));
        })
        .catch(console.error);
    }
  });
};
//LOGOUT
export const logout = () => (dispatch) => {
  dispatch(userLogout());
};

export const addUsernameToState = (info) => (dispatch) => {
  db.collection("users")
    .doc(info.id)
    .set({ username: info.username }, { merge: true })
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

// HERE
export const handleReturningUserSignIn = async (response) => {
  const uniqueUserId = response.user.uid;
  const userQuery = await db.collection("users").doc(uniqueUserId).get();

  const user = userQuery.data();
  return user;
};
