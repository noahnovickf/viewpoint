import { postsFetched } from "store/actions/posts";
import { db } from "database";

export const fetchPosts = ({ sortBy }) => (dispatch) => {
  db.collection("posts")
    .get()
    .then((snapshot) => {
      if (sortBy === "newest") {
        const postArray = [];
        snapshot.forEach((post) => {
          const postObj = post.data();
          postObj.id = post.id;
          postArray.push(postObj);
          postArray.sort(function (a, b) {
            return b.created_at - a.created_at;
          });
        });

        dispatch(postsFetched(postArray));
      } else {
        //TODO: Cleanup logic for sort by popularity
        const popularPostArray = [];
        snapshot.forEach((post) => {
          const postObj = post.data();
          postObj.id = post.id;
          popularPostArray.push(postObj);
          //TODO: Why are we sorting inside a forEach? Can we sort at the end?
          popularPostArray.sort(function (a, b) {
            return b.total_votes - a.total_votes;
          });
        });

        dispatch(postsFetched(popularPostArray));
      }
    })
    .catch(console.error);
};
