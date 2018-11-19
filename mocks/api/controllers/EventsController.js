/* global sails */

/* global sails, Events */
const fs = require('fs')
const ejs = require('ejs')
const _ = require('lodash')
const uuidV4 = require('uuid').v4
const EventTemplate = fs.readFileSync(
  `${sails.config.appPath}/api/templates/EventTemplate.ejs`,
  'utf8'
)

module.exports = {
  async initialize() {
    const events = new Array(3).fill().map((x, i) => {
      const vars = {
        id: i + 1,
      }

      return JSON.parse(ejs.render(EventTemplate, vars))
    })

    await Events.createEach(events)
  },

  async create(req, res) {
    const body = req.body
    const createdEvent = await Events.create({
      ...body,
      id: uuidV4(),
    }).fetch()
    res.json(createdEvent.id)
  },

  async find(req, res) {
    const id = req.param('id')
    const event = await Events.findOne({ id })
    res.json(event)
  },

  async findAll(req, res) {
    const allEvents = await Events.find({
      sort: 'id',
    })
    res.json(allEvents)
  },

  async update(req, res) {
    const id = req.param('id')
    const body = req.body
    const event = Events.update({ id }, body).fetch()
    res.json(event)
  },

  async delete(req, res) {
    const id = req.param('id')
    const event = await Events.destroy({ id })
    res.json(event)
  },
}
