import React from "react";
import { useSelector } from "react-redux";

import SampleDummy from "components/sampleDummy";

const Home = (props) => {
  const { fetchUserThunk } = props;

  // This is how to fetch data from the global state
  const user = useSelector((state) => state.users.user);

  return (
    <div className="w-full max-w-md">
      <div className="flex justify-center">{JSON.stringify(user)}</div>
      <button className="bg-blue w-full bg-orange-600" onClick={fetchUserThunk}>
        FETCH A USER
      </button>

      {/* Use of presentational components
       * Simply pass down props and display UI
       */}
      <SampleDummy text="Sample Text" />
    </div>
  );
};

export default Home;
