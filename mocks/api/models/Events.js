module.exports = {
  primaryKey: 'id',
  identity: 'Events',
  attributes: {
    id: {
      type: 'string',
      unique: true,
      required: true,
    },
    name: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'string',
      required: true,
    },
    city: {
      type: 'string',
      required: true,
    },
  },
}
