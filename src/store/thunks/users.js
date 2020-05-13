import { userSignedIn, userLogout } from "../actions/users";

import { googlePopupSignInMethod, db } from "database";
import { useSelector } from "react-redux";

//CREATE NEW USER
export const signInWithGoogle = () => (dispatch) => {
  console.log("Sign in with google");
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
        })
        .then(() => {
          handleReturningUserSignIn(res).then((user) => {
            dispatch(userSignedIn(user));
          });
        });
      console.log("added");
    } else {
      // Call a thunk here with payload of whatever the user in state needs to have
      handleReturningUserSignIn(res).then((user) => {
        dispatch(userSignedIn(user));
      });
    }
  });
};
//LOGOUT
export const logout = () => (dispatch) => {
  dispatch(userLogout());
};

export const addUsernameToState = (info) => (dispatch) => {
  console.log("thunk", info);
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
    });
};

// HERE
export const handleReturningUserSignIn = async (response) => {
  const uniqueUserId = response.user.uid;

  const userQuery = await db.collection("users").doc(uniqueUserId).get();

  const user = userQuery.data();
  return user;
};
// 5 steps in Redux
// 1. Your component (button) will call a thunk
// 2. Your thunk makes an API call, waits for it resolve
// 3. Your calls resolves. An action is dispatched with the data you need for your store
// 4. Your action hits your reducer
// 5. Your reducer sets you state in the store

// 6. You can access this state anywhere in the app
