import { combineReducers } from 'redux'
import { createSelector } from 'reselect'
import omit from 'lodash-es/omit'
import * as actionTypes from '../actions/actionTypes'

const eventReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_EVENT:
      return {
        ...action.payload,
        id: 'new',
      }

    default:
      return state
  }
}

const eventByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_EVENTS_SUCCESS:
      return action.payload.reduce(
        (acc, event) => ({
          ...acc,
          [event.id]: event,
        }),
        {}
      )

    case actionTypes.CREATE_EVENT_SUCCESS:
      return {
        ...state,
        new: eventReducer(null, action),
      }

    case actionTypes.REMOVE_EVENT_START:
      return {
        ...omit(state, [action.payload]),
      }

    default:
      return state
  }
}

const eventIdsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_EVENTS_SUCCESS:
      return action.payload.map((task) => task.id)

    case actionTypes.ADD_EVENT:
      return ['new', ...state]

    case actionTypes.CREATE_EVENT_SUCCESS:
      return [...state.map((id) => (id === 'new' ? action.payload.id : id))]

    case actionTypes.REMOVE_EVENT_START:
      return [...state.filter((id) => id !== action.payload)]

    default:
      return state
  }
}

export const eventsReducer = combineReducers({
  byId: eventByIdReducer,
  allIds: eventIdsReducer,
})

export const getEvents = (state) =>
  state.events.allIds.map((id) => state.events.byId[id])

export const getSingleEvent = (state, eventId) => state.events.byId[eventId]

export const getEventsForToday = createSelector(getEvents, (events) =>
  events.filter((event) => event.today === true)
)
