import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Posts from "./components/posts";
import ShowPost from "./components/showPost";
import Comments from "./components/comments";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NewPost from "./components/newPost";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <ul>
            {/* <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/comments">Comments</Link>
            </li> */}
          </ul>

          <hr />
          <Switch>
            <Route path="/posts/:id/comments" component={Comments} />
            <Route exact path="/posts/new" component={NewPost} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/posts/:id" component={ShowPost} />
            <Route path="/comments" component={Comments} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
