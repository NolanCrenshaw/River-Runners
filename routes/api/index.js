const router = require('express').Router();

const routes = [
  'users',
  'rivers',
  'trips',
  'crafts',
  'vehicles',
  'session',
];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
