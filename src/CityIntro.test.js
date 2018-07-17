import React from 'react';
import ReactDOM from 'react-dom';
import CityIntro from './CityIntro.js'
import {render} from 'react-testing-library';

it('renders without crashing', () => {
  render(<CityIntro />);
});
