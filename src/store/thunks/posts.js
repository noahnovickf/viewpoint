import { postsFetched } from "store/actions/posts";
import { db } from "database";

export const fetchPosts = () => (dispatch) => {
  db.collection("posts")
    .get()
    .then((snapshot) => {
      const postArray = [];
      snapshot.forEach((post) => {
        postArray.push(post.data());
      });
      dispatch(postsFetched(postArray));
    })
    .catch(console.error);
};
