import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './components/Header';




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
          <Header/>
        </Route>


      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
