const ItemsController = require(`${
  sails.config.appPath
}/api/controllers/ItemsController.js`)

module.exports = {
  generate() {
    ItemsController.initialize()
  },
}
