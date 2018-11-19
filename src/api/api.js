import HttpClient from '../lib/HttpClient'

const basePath = '/api'

// Items
export const getItems = () => HttpClient.get(`${basePath}/items`)
export const createItem = (fields) =>
  HttpClient.post(`${basePath}/items/create`, fields)
export const updateItem = (id, fields) =>
  HttpClient.put(`${basePath}/items/${id}`, fields)
export const deleteItem = (id) => HttpClient.delete(`${basePath}/items/${id}`)
