import { postsFetched } from "store/actions/posts";
import { db } from "database";
import {
  SORT_BY_NEWEST,
  SORT_BY_OLDEST,
  SORT_BY_MOST_POPULAR,
  SORT_BY_LEAST_POPULAR,
} from "database/utils";

/**
 *
 * @param {string} sortBy
 * 1. Always fetch all posts from backend
 * 2. Based on the sortBy parameter, sort the posts
 * 3. Save sorted posts in redux store
 */
export const fetchPosts = ({ sortBy = SORT_BY_NEWEST }) => (dispatch) => {
  db.collection("posts")
    .get()
    .then((snapshot) => {
      const postArray = [];
      snapshot.forEach((post) => {
        const postObj = post.data();
        postObj.id = post.id;
        postArray.push(postObj);
      });

      switch (sortBy) {
        case SORT_BY_NEWEST:
          postArray.sort((a, b) => {
            return b.created_at - a.created_at;
          });
          break;
        case SORT_BY_OLDEST:
          postArray.sort((a, b) => {
            return a.created_at - b.created_at;
          });
          break;
        case SORT_BY_MOST_POPULAR:
          postArray.sort((a, b) => {
            return b.total_votes - a.total_votes;
          });
          break;
        case SORT_BY_LEAST_POPULAR:
          postArray.sort((a, b) => {
            return a.total_votes - b.total_votes;
          });
          break;

        default:
          break;
      }
      dispatch(postsFetched(postArray));
    })
    .catch(alert);
};
