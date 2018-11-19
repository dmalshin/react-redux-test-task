/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  '/': {
    view: 'pages/homepage',
  },
  'GET    /api/items': 'ItemsController.findAll',
  'GET    /api/items/:id': 'ItemsController.find',
  'POST   /api/items': 'ItemsController.create',
  'PUT    /api/items/:id': 'ItemsController.update',
  'DELETE /api/items/:id': 'ItemsController.delete',

  'GET    /api/custom': 'ItemsController.custom',
}
