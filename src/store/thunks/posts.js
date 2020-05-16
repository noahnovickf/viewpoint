import { postsFetched } from "store/actions/posts";
import { db } from "database";

export const fetchPosts = () => (dispatch) => {
  db.collection("posts")
    .get()
    .then((snapshot) => {
      const postArray = [];
      snapshot.forEach((post) => {
        const obj = post.data();
        obj.id = post.id;
        postArray.push(obj);
      });
      dispatch(postsFetched(postArray));
    })
    .catch(console.error);
};
