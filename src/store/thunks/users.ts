import { userFetched } from "./../actions/users";
import { fetchAllUsers } from "../../database/users";

export const fetchUser = () => (dispatch) => {
  fetchAllUsers()
    .then((user) => {
      dispatch(userFetched(user));
    })
    .catch(console.error);
};
