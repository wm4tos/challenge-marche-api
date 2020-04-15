const { Router } = require('express');
const loadRoutes = require('./helpers/load_routes');

module.exports = (router) => {
  const routes = loadRoutes(['users']);

  routes.forEach((route) => {
    const { endpoint, router: r } = route(Router);

    router.use(endpoint, r);
  });

  return router;
};
