import * as actionTypes from './actionTypes'

export const fetchEventsStart = () => ({
  type: actionTypes.FETCH_EVENTS_START,
})

export const fetchEventsSuccess = (items) => ({
  type: actionTypes.FETCH_EVENTS_SUCCESS,
  payload: items,
})

export const fetchEventsFailure = (error) => ({
  type: actionTypes.FETCH_EVENTS_FAILURE,
  payload: error,
})

export const removeEventStart = () => ({
  type: actionTypes.REMOVE_EVENT_START,
})

export const removeEventSuccess = (id) => ({
  type: actionTypes.REMOVE_EVENT_SUCCESS,
  payload: id,
})

export const removeEventFailure = (error) => ({
  type: actionTypes.REMOVE_EVENT_FAILURE,
  payload: error,
})

export const createEventStart = () => ({
  type: actionTypes.FETCH_EVENTS_START,
})

export const createEventSuccess = (items) => ({
  type: actionTypes.FETCH_EVENTS_SUCCESS,
  payload: items,
})

export const createEventFailure = (error) => ({
  type: actionTypes.FETCH_EVENTS_FAILURE,
  payload: error,
})

export const addEvent = (item) => ({
  type: actionTypes.ADD_CREATED_EVENT_DATA,
  payload: item,
})
