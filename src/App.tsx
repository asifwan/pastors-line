import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactButtons from "./components/ContactButtons";
import { routes } from "./constants/routes.constants";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={routes.USContacts}>
            <div>us contact</div>
          </Route>
          <Route path={routes.AllContact}>
            <div>all contact</div>
          </Route>
          <Route path="/">
            <ContactButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
