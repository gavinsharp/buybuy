import fetchMock from 'fetch-mock';

beforeAll(() => {
  fetchMock.get('begin:http://api.ipstack.com/', { city: "Fakeville" });
});

afterAll(() => {
  fetchMock.restore();
});
