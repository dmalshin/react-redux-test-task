module.exports = {
  primaryKey: 'id',
  identity: 'Items',
  attributes: {
    id: {
      type: 'string',
      unique: true,
      required: true,
    },
    name: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
  },
}
