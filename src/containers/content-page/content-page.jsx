import React, { useEffect, useState } from "react";
import { fetchAllUsers } from "database/users.js";

const Content = (props) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const citiesArr = [];
    fetchAllUsers().then((cities) => {
      cities.docs.forEach((elem) => {
        const cityName = elem.data().name;
        citiesArr.push(cityName);
      });

      setCities(citiesArr);
    });
  }, []);

  return (
    <div>
      <ul>
        {cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
