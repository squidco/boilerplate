import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import FourOhFour from "./pages/NoRoute";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route exact path="/books/:id">
            <BookDetail />
          </Route>
          <Route>
            <FourOhFour />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
