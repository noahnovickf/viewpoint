import { postsFetched } from "store/actions/posts";
import { db } from "database";

export const fetchPosts = ({
  sortBy,
  whereCondition1,
  whereAssertion,
  whereCondition2,
}) => (dispatch) => {
  console.log(sortBy, whereCondition1, whereAssertion, whereCondition2);
  db.collection("posts")
    .where(whereCondition1, whereAssertion, whereCondition2)
    .get()
    .then((snapshot) => {
      console.log("hit");
      if (sortBy === "newest") {
        console.log("hit again");

        const postArray = [];
        snapshot.forEach((post) => {
          const postObj = post.data();
          postObj.id = post.id;
          postArray.push(postObj);
          postArray.sort(function (a, b) {
            return b.created_at - a.created_at;
          });
        });
        console.log(postArray);
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
