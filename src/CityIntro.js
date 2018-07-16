import React from 'react';

class CityIntro extends React.Component {
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
      <div>
        <Greeting city={this.state.city} />
      </div>
    );
  }
}

function GenericGreeting(props) {
  return <h1>The best place to buy a home!</h1>;
}

function CityGreeting(props) {
  return <h1>The best place to buy a home in {props.city}!</h1>;
}

function Greeting(props) {
  const city = props.city;
  if (city) {
    return <CityGreeting city={city} />;
  }
  return <GenericGreeting />;
}

export default CityIntro;