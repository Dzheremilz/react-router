import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/404">Error 404</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/404">
            <NoMatch />
          </Route>
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {

  React.useEffect(() => {
    document.title = "Home"
  }, [])

  return <h2>Home</h2>;
}

function About() {

  React.useEffect(() => {
    document.title = "About"
  }, [])

  return <h2>About</h2>;
}

function Users() {

  React.useEffect(() => {
    document.title = "About"
  }, [])

  return <h2>Users</h2>;
}

function NoMatch() {

  React.useEffect(() => {
    document.title = "404 Page not found"
  }, [])

  return (
    <div>
      <h2>
        Error 404
      </h2>
    </div >
  );
}
