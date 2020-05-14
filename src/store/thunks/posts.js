import { getAllPosts } from "store/actions/posts";
import { db } from "database";

export const getAllPostsToRender = () => (dispatch) => {
  db.collection("posts")
    .get()
    .then((snapshot) => {
      const postArray = [];
      snapshot.forEach((post) => {
        postArray.push(post.data());
      });
      dispatch(getAllPosts(postArray));
    })
    .catch(console.error);
};
