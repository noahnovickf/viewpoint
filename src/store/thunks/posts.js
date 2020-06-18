import { postsFetched } from "store/actions/posts";
import { db } from "database";

export const fetchPosts = (sortBy, timeframe) => (dispatch) => {
  if (sortBy === "newest") {
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
        console.log(postArray);
        dispatch(postsFetched(postArray));
      })
      .catch(console.error);
  } else {
    const time = Date.now() - timeframe;
    db.collection("posts")
      .where("created_at", ">", time)
      .orderBy("created_at")
      .get()
      .then((snapshot) => {
        const popularPostArray = [];
        snapshot.forEach((post) => {
          const postObj = post.data();
          postObj.id = post.id;
          popularPostArray.push(postObj);
          popularPostArray.sort(function (a, b) {
            return b.total_votes - a.total_votes;
          });
        });
        console.log(popularPostArray);
        dispatch(postsFetched(popularPostArray));
      })
      .catch(console.error);
  }
};
