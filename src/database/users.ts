/**
 * Make database calls here
 * Make sure to return a promise, which will be resolved or rejected in the thunk
 * TODO: Remove this placeholder and actually fetch data from the database
 */
export const fetchAllUsers = () => {
  return new Promise((resolve, reject) => {
    resolve({
      name: "Noah Novick",
      profession: "Web developer",
    });
  });
};
