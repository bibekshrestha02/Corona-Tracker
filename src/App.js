import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./component/navBar";
import Dashboard from "./component/dashboard";
import Ranking from "./component/ranking";
import Footer from "./component/footer";
import "./css/style.css";
function App() {
  return (
    <>
      <Router>
        <Nav />

        <Switch>
          <Route path='/ranking' exact>
            <Ranking />
          </Route>
          <Route path='*' exact>
            <Dashboard />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
