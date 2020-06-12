export const userSignedIn = (payload) => {
  return { type: "USER_SIGNED_IN", payload };
};

export const userLogout = () => {
  return { type: "USER_LOGOUT" };
};

export const avatarFetched = (payload) => {
  return { type: "USER_AVATAR_FETCHED", payload };
};
