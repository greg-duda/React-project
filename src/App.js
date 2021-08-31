import React from 'react'
import './App.css';
import Counter from "./Components/Counter"
import Nav from './Components/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import Characters from './Components/Characters'
import Timer from './Components/Timer'
import Register from './Components/Register';
import Login from './Components/Login';
import About from './Components/About';

 function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <div className='content'>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/Counter'>
          <Counter />
        </Route>
        <Route path='/Characters'>
          <Characters />
        </Route>
        <Route path='/Timer'>
          <Timer />
        </Route>
        <Route path='/Register'>
          <Register />
        </Route>
        <Route path='/Login'>
          <Login />
        </Route>
        <Route path='/About'>
          <About />
        </Route>
      </Switch>



      </div>
      </div>
    </Router>
  );
}
export default App