import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import configureStore from "./store";
import App from "./App";
import Login from "containers/login";
import * as serviceWorker from "./serviceWorker";
import "./styles/tailwind.css";

require("dotenv").config();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <Route exact path="/" component={App} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
