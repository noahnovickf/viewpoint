import { postsFetched } from "store/actions/posts";
import { db } from "database";

export const fetchPosts = ({ sortBy, time }) => (dispatch) => {
  const timestamp = Date.now() - time;
  db.collection("posts")
    .where("created_at", ">", timestamp)
    .orderBy("created_at", "desc")
    .get()
    .then((snapshot) => {
      if (sortBy === "newest") {
        const postArray = [];
        snapshot.forEach((post) => {
          const postObj = post.data();
          postObj.id = post.id;
          postArray.push(postObj);
        });
        dispatch(postsFetched(postArray));
      } else {
        const popularPostArray = [];
        snapshot.forEach((post) => {
          const postObj = post.data();
          postObj.id = post.id;
          popularPostArray.push(postObj);
          popularPostArray.sort(function (a, b) {
            return b.total_votes - a.total_votes;
          });
        });
        dispatch(postsFetched(popularPostArray));
      }
    })
    .catch(console.error);
};
