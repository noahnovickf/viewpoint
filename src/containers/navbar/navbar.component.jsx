import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import "/Users/user/Desktop/judger/src/styles/navbar.css";

const Navbar = (props) => {
  const usernameFromState = useSelector((state) => state.users.user.username);
  return (
    <div className="border-grayy border-b-2 flex justify-between py-1">
      <div>
        <i className="pl-2 align-middle material-icons color-grayy">menu</i>
      </div>
      <div className="font-mono text-grayy text-center">Undefined</div>
      <Link to={props.navigation}>
        <i className="pr-2 align-middle material-icons color-grayy">
          {props.postAdd}
        </i>
      </Link>
    </div>
  );
};

export default Navbar;
