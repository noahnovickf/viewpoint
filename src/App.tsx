import React from "react";
import "./App.css";

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
    <div className="App">
      <header className="App-header">
        <p>Argument App</p>
        <button onClick={sampleButtonClick}>Click me to add to DB</button>
      </header>
    </div>
  );
}

export default App;
