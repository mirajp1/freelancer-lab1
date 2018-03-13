import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomeHeader from './components/HomeHeader';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';


class App extends Component {
  render() {
    return (
      <div>
          <HomeHeader/>
          <div>

              <Route path="/login" component={Login}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/profile" component={Profile}/>

          </div>

      </div>

    );
  }
}


export default App;
