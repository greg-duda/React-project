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
import CharDetails from './Components/CharDetails';
import Succes from './Components/Succes';

 function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <div className='content'>
      <Switch>
        <Route path='/Home'>
          <Home />
        </Route>
        <Route path='/Counter'>
          <Counter />
        </Route>
        <Route path='/Characters'>
          <Characters />
        </Route>
        <Route path='/Timer'>
          <Timer defaultValue={20000} />
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
        <Route path="/:name/:id">
          <CharDetails />
        </Route>
        <Route path="/Succes">
          <Succes />
        </Route>
      </Switch>



      </div>
      </div>
    </Router>
  );
}
export default App