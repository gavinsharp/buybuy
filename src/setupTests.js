import fetchMock from 'fetch-mock';
import {cleanup} from 'react-testing-library';

beforeEach(() => {
  fetchMock.get('begin:http://api.ipstack.com/', { city: "Fakeville" });
});

afterEach(() => {
  fetchMock.restore();
  cleanup();
});
