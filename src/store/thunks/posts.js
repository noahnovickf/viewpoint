import { getAllPosts } from "store/actions/posts";
import { db } from "database";

export const getAllPostsToRender = () => (dispatch) => {
  db.collection("posts")
    .get()
    .then((snapshot) => {
      const postArray = [];
      snapshot.forEach((post) => {
        const postObj = post.data();
        postObj.id = post.id;
        postArray.push(postObj);
      });
      dispatch(getAllPosts(postArray));
    })
    .catch(console.error);
};
