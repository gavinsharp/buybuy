import React, { Component } from 'react';
import logo from './logo-256.png';
import CityIntro from './CityIntro.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Buybuy</h1>
        </header>
        <CityIntro />
      </div>
    );
  }
}

export default App;
