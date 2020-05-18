import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import CreatePost from "containers/create-post";
import Home from "containers/home";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/post">Create a Post</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/post" component={CreatePost} />
      </div>
    </Router>
  );
}

export default App;
