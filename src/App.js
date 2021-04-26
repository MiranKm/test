import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Games from './components/pages/Games';
import Reviews from './components/pages/Reviews';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/games' component={Games} />
        <Route path='/reviews' component={Reviews} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
