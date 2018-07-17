import React, { Component } from 'react';
import logo from './logo-256.png';
import CityIntro from './CityIntro.js'
import WhyBlurb from './WhyBlurb.js'
import HomeListing from './HomeListing.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null,
      listings: null,
    }
  }

  componentDidMount() {
    this.fetchCity();
    this.fetchListings();
  }

  cityUpdated(city) {
    this.setState({ city: city });
    document.title = "Homes for sale in " + this.state.city;
    if (this.props.onCityUpdated) {
      this.props.onCityUpdated(city);
    }
  }

  fetchListings() {
    // hardcoded for now
    this.setState({ listings:
      [
        {
          id: 0,
          rooms: '4 bed 2 bath',
          photo: '0.jpg',
          neighborhood: 'Riverdale',
          sqft: 2000,
          price: 1200000,
        },
        {
          id: 1,
          rooms: '3 bed 2 bath',
          photo: '1.jpg',
          neighborhood: 'Junction',
          sqft: 1800,
          price: 900000,
        },
      ]
    });
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
        <HomeListings className="HomeListings-container" listings={this.state.listings} />
        <WhyBlurb />
      </div>
    );
  }
}

function HomeListings(props) {
  if (props.listings === null) {
    return null;
  }

  let listings = props.listings.map((l) => {
    return <HomeListing photo={l.photo} rooms={l.rooms} neighborhood={l.neighborhood} sqft={l.sqft} key={l.id} />
  });

  return <div className="HomeListings">{listings}</div>
}

export default App;
