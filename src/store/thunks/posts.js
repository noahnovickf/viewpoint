import { postsFetched } from "store/actions/posts";
import { db } from "database";

export const fetchPosts = () => (dispatch) => {
  db.collection("posts")
    .orderBy("created_at", "desc")
    .get()
    .then((snapshot) => {
      const postArray = [];
      snapshot.forEach((post) => {
        const postObj = post.data();
        postObj.id = post.id;
        postArray.push(postObj);
      });
      dispatch(postsFetched(postArray));
    })
    .catch(console.error);
};
