import HttpClient from '../lib/HttpClient'

const basePath = '/api'

export const getEvents = () => HttpClient.get(`${basePath}/events`)
export const createEvent = (fields) =>
  HttpClient.post(`${basePath}/events/create`, fields)
export const deleteEvent = (id) => HttpClient.delete(`${basePath}/events/${id}`)
