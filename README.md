# buybuy

where home buyers go to buy.

## Quickstart
* clone the repo
* `npm install`
* `npm start` or `npm test`

## Some outstanding items:
* missing features
  * lead gen form, with address autocomplete
  * allow filtering listings based on listing properties
* improved styling
* testing
  * add snapshot tests (via react-test-renderer/jest)
  * improve test coverage
* bugs
  * avoid calling setState in fetch callbacks after component unmount (causes issues with test env)
* performance
  * consider preact
* misc.
  * evaluate server-rendered pages for SEO?
