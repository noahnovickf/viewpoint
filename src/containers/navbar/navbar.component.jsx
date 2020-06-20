import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  return (
    <div className="border-grayy align-middle border-b-2 flex justify-between pt-3 pb-1 text-l bg-bluey">
      <div>
        <i className="pl-2  material-icons color-grayy">menu</i>
      </div>
      <div className="font-noto tracking-wide text-grayy  text-center">
        Undefined
      </div>
      <Link to={props.navigation}>
        <i className="pr-2  material-icons color-grayy">{props.postAdd}</i>
      </Link>
    </div>
  );
};

export default Navbar;
