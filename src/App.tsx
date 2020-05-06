import React from "react";

import DATABASE from "./database/firebase";

function App() {
  const sampleButtonClick = async () => {
    try {
      await DATABASE.db.collection("cities").doc("LA").set({
        name: "Los Angeles",
        state: "CA",
        country: "USA",
      });
      alert("Success");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App flex justify-center items-center">
      <div className="w-full max-w-md bg-orange-600">
        <button className="bg-blue w-full" onClick={sampleButtonClick}>
          PRESS ME
        </button>
      </div>
    </div>
  );
}

export default App;
