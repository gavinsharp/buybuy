import React from 'react';
import ReactDOM from 'react-dom';
import CityIntro from './CityIntro.js'
import {render} from 'react-testing-library';
import 'jest-dom/extend-expect'
import faker from 'faker';
import fetchMock from 'fetch-mock';

it('fetches city', async () => {
  // Override global mock value from setupTests.js
  fetchMock.restore();
  let mockCityName = faker.address.city();
  fetchMock.get('begin:http://api.ipstack.com/', { city: mockCityName });

  let cityUpdated = new Promise(resolve => {
    render(<CityIntro onCityUpdated={resolve} />);
  });

  await cityUpdated;

  expect(document.body).toHaveTextContent(mockCityName);
});
