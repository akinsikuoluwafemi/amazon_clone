import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="app">
      <Switch>
        <Route exact path="/checkout">
          <h1>Checkout</h1>
        </Route>
        <Route path="/login">
          login
        </Route>
        <Route path="/">
          Home
        </Route>


      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
