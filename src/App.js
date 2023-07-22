
import './App.css';

import React, { Component } from 'react'
import NavBar from './com/NavBar';
import News from './com/News';

export default class App extends Component {

  render() {
    return (
      <div>
        <NavBar/>
        <News/>
      </div>
    )
  }
}