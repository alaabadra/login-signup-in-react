import React, { Component } from 'react';
import './style.css';
// import Logo from '../Logo'

export default class Login extends Component {
  render(){
      return(
       
    
        <div className="signup_form">
          <input type="text" className="email_login" placeholder="email"/> 
          <input type="password" className="email_login" placeholder="password"/> 
          <input type="submit" className="submit_login"/> 
        </div>
      )
  }
}