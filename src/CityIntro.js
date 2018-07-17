import React from 'react';

class CityIntro extends React.Component {
  render() {
    return (
      <div>
        <Greeting city={this.props.city} />
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