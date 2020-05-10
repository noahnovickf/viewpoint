export const userSignedIn = (payload) => {
  console.log("action", payload);
  return { type: "USER_SIGNED_IN", payload };
};
