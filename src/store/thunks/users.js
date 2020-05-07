import { userFetched } from "../actions/users";
import { fetchAllUsers } from "../../database/users";

export const fetchUser = () => (dispatch) => {
  fetchAllUsers()
    .then((userSnapshot) => {
      // How to read a snapshot from firestore
      const user = userSnapshot.data();
      dispatch(userFetched(user));
    })
    .catch(console.error);
};
