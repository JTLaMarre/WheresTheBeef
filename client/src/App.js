import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import NavBar from './components/Nav';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">
    <Router>
        <NavBar />
 

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" >
              <Home/>
          </Route>
          
        </Switch>
    </Router>
    </div>
  );
}

export default App;
