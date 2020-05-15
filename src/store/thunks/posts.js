import { getAllPosts } from "store/actions/posts";
import { db } from "database";

export const getAllPostsToRender = () => (dispatch) => {
  db.collection("posts")
    .get()
    .then((snapshot) => {
      const postArray = [];
      snapshot.forEach((post) => {
        const obj = post.data();
        obj.id = post.id;
        postArray.push(obj);
      });
      dispatch(getAllPosts(postArray));
    })
    .catch(console.error);
};
