import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.users.user);
  return <h1 Classname="justify-center">{user.full_name}</h1>;
};
export default Profile;
