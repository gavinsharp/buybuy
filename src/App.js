import React, { Component } from 'react';
import logo from './logo-256.png';
import CityIntro from './CityIntro.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null,
    }
  }

  componentDidMount() {
    this.fetchCity();
  }

  cityUpdated(city) {
    this.setState({ city: city });
    if (this.props.onCityUpdated) {
      this.props.onCityUpdated(city);
    }
  }

  fetchCity() {
    var url = 'http://api.ipstack.com/check?access_key=c4d75354c9a67d5b661a26001dc0254d&fields=city';
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.cityUpdated(responseJson.city)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Buybuy</h1>
        </header>
        <CityIntro city={this.state.city} />
      </div>
    );
  }
}

export default App;
