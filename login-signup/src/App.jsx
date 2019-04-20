import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './component/Signup';
import Login from './component/Login';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <Switch>
          <Route exact path='/'/>
          <Route  exact path='/signup' component={Signup}/>
          <Route  exact path='/login' component={Login}/>
          
        </Switch>
     </BrowserRouter>
    );
  }
}

export default App;
