import React from "react";
import firebase from "firebase";
import { fetchAllUsers } from "database/users.js";

const Content = (props) => {
  const listOfCities = fetchAllUsers().then((cities) => {
    cities.docs.map((city) => {
      return city;
    });
  });
  console.log(listOfCities);
  return (
    <div>
      <ul>list </ul>
    </div>
  );
};

export default Content;
