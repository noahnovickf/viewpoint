import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const Navbar = (props) => {
  const { navigation, topRightIcon } = props;
  return (
    <div className="border-grayy align-middle border-b-2 flex justify-between pt-3 pb-1 text-l bg-bluey font-noto">
      <Link to="/side-bar">
        <i className="pl-2  material-icons text-grayy">menu</i>
      </Link>
      <Link to="/" className=" text-grayy  text-center">
        ViewPoint
      </Link>
      <Link to={navigation}>
        <i className="pr-2  material-icons text-grayy">{topRightIcon}</i>
      </Link>
    </div>
  );
};

export default Navbar;
