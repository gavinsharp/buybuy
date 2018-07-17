# buybuy

where home buyers go to buy.

## Quickstart
* clone the repo
* `npm install`
* `npm start` or `npm test`

## Some outstanding items:
* missing features
  * lead gen form, with address autocomplete (e.g. "Sign up to hear about new listings in your area!")
    * could A/B test variants of this to optimize UX/conversion
  * allow filtering listings based on listing properties
  * allow exploring by neighborhood, specifying city, etc.
  * map view of listings
* style and substance
  * currently quite ugly!
  * need better copy / marketing materials
* testing
  * add snapshot tests (via react-test-renderer/jest)
  * improve test coverage
* bugs
  * actually hook up mocked listing data to real data source
  * avoid calling setState in fetch callbacks after component unmount (causes issues with test env)
* performance
  * consider preact
* misc.
  * evaluate server-rendered per-city landing pages for SEO?
