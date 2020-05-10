import { db } from "./index";

export const fetchPosts = () => {
  try {
    return db
      .collection("posts")
      .get()
      .then((snapshot) => {
        snapshot.forEach((post) => {
          console.log(post.data());
        });
      });
  } catch (error) {
    return new Promise((resolve, reject) => {
      reject("Error fetching user from Firestore");
    });
  }
};
