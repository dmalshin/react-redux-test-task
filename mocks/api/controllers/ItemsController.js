/* global sails */

/* global sails, Items */
const fs = require('fs')
const ejs = require('ejs')
const _ = require('lodash')
const uuidV4 = require('uuid').v4
const ItemTemplate = fs.readFileSync(
  `${sails.config.appPath}/api/templates/ItemsTemplate.ejs`,
  'utf8'
)

module.exports = {
  async initialize() {
    const items = new Array(25).fill().map((x, i) => {
      const index = i + 1
      const vars = {
        id: index < 10 ? `0${index}` : index.toString(),
      }

      return JSON.parse(ejs.render(ItemTemplate, vars))
    })

    await Items.createEach(items)
  },

  async create(req, res) {
    const body = req.body
    const createdItem = await Items.create({
      ...body,
      id: uuidV4(),
    }).fetch()
    res.json(createdItem.id)
  },

  async find(req, res) {
    const id = req.param('id')
    const item = await Items.findOne({ id })
    res.json(item)
  },

  async findAll(req, res) {
    const allItems = await Items.find({
      sort: 'id',
    })
    res.json(allItems)
  },

  async update(req, res) {
    const id = req.param('id')
    const body = req.body
    const item = Items.update({ id }, body).fetch()
    res.json(item)
  },

  async delete(req, res) {
    const id = req.param('id')
    const item = await Items.destroy({ id })
    res.json(item)
  },

  custom(req, res) {
    res.ok('Custom endpoint')
  },
}
