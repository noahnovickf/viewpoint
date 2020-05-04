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
    <div className="flex justify-center justify-center bg-blue-100 h-20 w-20">
      <p>Argument App</p>
      <button onClick={sampleButtonClick}>Click me to add to DB</button>
    </div>
  );
}

export default App;
