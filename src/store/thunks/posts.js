import { postsFetched } from "store/actions/posts";
import { db } from "database";

export const fetchPosts = (para1, para2) => (dispatch) => {
  db.collection("posts")
    .orderBy(para1, para2)
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
