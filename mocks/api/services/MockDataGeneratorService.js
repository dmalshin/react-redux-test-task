const EventsController = require(`${
  sails.config.appPath
}/api/controllers/EventsController.js`)

module.exports = {
  generate() {
    EventsController.initialize()
  },
}
