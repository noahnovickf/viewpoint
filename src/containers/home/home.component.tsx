import React from "react";
import { useSelector } from "react-redux";

const Home = (props) => {
  const { fetchUserThunk } = props;
  const user = useSelector((state) => {
    return state.userReducer.user;
  });

  return (
    <div className="w-full max-w-md">
      <div className="flex justify-center">{JSON.stringify(user)}</div>
      <button className="bg-blue w-full bg-orange-600" onClick={fetchUserThunk}>
        FETCH A USER
      </button>
    </div>
  );
};

export default Home;
