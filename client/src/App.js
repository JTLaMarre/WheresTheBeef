import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import NavBar from './components/Nav';
import Home from './pages/Home';
import Report from './pages/Report/Report';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Stock from './pages/Stock/Stock';



function App() {
  return (
    <div className="App">
    <Router>
        <NavBar />
 

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" >
              <Home/>
          </Route>
          <Route exact path="/report" >
              <Report/>
          </Route>
          <Route exact path="/products" >
              <Stock/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
