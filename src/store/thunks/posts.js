import { postsFetched } from "store/actions/posts";
import { db } from "database";

export const fetchPosts = (sortBy, timeframe) => (dispatch) => {
  console.log(sortBy);
  if (sortBy === "newest") {
    console.log("hit newest");
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
  } else {
    console.log("hit newest");
    const time = Date.now() - timeframe;
    console.log(time);
    db.collection("posts")
      .where("created_at", ">", time)
      .orderBy("created_at")
      // .orderBy("total_votes", "desc")
      .get()
      .then((snapshot) => {
        console.log("hit this new pop shit");
        const popularPostArray = [];
        snapshot.forEach((post) => {
          const postObj = post.data();
          postObj.id = post.id;
          popularPostArray.push(postObj);
        });
        console.log(popularPostArray);
        dispatch(postsFetched(popularPostArray));
      })
      .catch(console.error);
  }
};

// export const fetchPopularPosts = (timeframe) => (dispatch) =>{
//   db.
// }
