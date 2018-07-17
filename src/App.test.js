import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from 'react-testing-library';
import 'jest-dom/extend-expect'
import faker from 'faker';
import fetchMock from 'fetch-mock';

it('renders without crashing', () => {
  render(<App />);
});

it('fetches city', async () => {
  // Override global mock value from setupTests.js
  fetchMock.restore();
  let mockCityName = faker.address.city();
  fetchMock.get('begin:http://api.ipstack.com/', { city: mockCityName });

  let container;

  let cityUpdated = new Promise(resolve => {
    container = render(<App onCityUpdated={resolve} />).container;
  });

  await cityUpdated;

  expect(container).toHaveTextContent(mockCityName);
});
