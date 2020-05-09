import React from "react";
import firebase from "firebase";
import { fetchAllUsers } from "database/users.js";

const Content = (props) => {
  let citiesArr = [];
  citiesArr = fetchAllUsers().then((cities) => {
    cities.docs.map((elem) => {
      return <li>elem.data().name</li>;
    });
  });

  return (
    <div>
      <ul>{citiesArr} </ul>
    </div>
  );
};

export default Content;
