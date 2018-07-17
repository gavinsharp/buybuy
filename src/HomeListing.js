import React from 'react';
import './HomeListing.css';

class HomeListing extends React.Component {
  render() {
    return (
      <div className="HomeListing-container">
        <HomePhoto photo={this.props.photo} rooms={this.props.rooms} neighborhood={this.props.neighborhood} />
        <HomeTextBlurb neighborhood={this.props.neighborhood} rooms={this.props.rooms} sqft={this.props.sqft} />
      </div>
    );
  }
}

function HomePhoto(props) {
  return (
    <div>
      <img className="HomePhoto-img" src={props.photo} alt={props.rooms + " home in " + props.neighborhood} />
      <p className="HomePhoto-price"></p>
    </div>
  );
}

function HomeTextBlurb(props) {
  return <p className="HomeTextBlurb-p">{props.rooms}, {props.sqft} sq ft. home in {props.neighborhood}</p>;
}

export default HomeListing;
