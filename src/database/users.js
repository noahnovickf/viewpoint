import DATABASE from "./index";

/**
 * Make database calls here
 * Make sure to return a promise, which will be resolved or rejected in the thunk
 * TODO: Remove this placeholder and actually fetch data from the database
 */
export const fetchAllUsers = async () => {
  try {
    return DATABASE.db.collection("cities").doc("LA").get();
  } catch (error) {
    return new Promise((resolve, reject) => {
      reject("Error fetching user from Firestore");
    });
  }
};
