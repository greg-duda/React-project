import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import './App.css';

import Home from './Components/Home';
import Characters from './Components/Characters'
import Timer from './Components/Timer'
import Register from './Components/Register';
import Login from './Components/Login';
import About from './Components/About';
import CharDetails from './Components/CharDetails';
import Success from './Components/Success';
import Counter from "./Components/Counter"
import Nav from './Components/Nav'


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
        <Route path='/counter'>
          <Counter />
        </Route>
        <Route path='/characters'>
          <Characters />
        </Route>
        <Route path='/timer'>
          <Timer defaultValue={20000} />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path="/:name/:id">
          <CharDetails />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>



      </div>
      </div>
    </Router>
  );
}
export default App