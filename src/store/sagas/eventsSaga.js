import { call, put, takeLatest } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
import * as api from '../../api'
import {
  fetchEventsSuccess,
  fetchEventsFailure,
  removeEventSuccess,
  removeEventFailure,
  addEvent,
  createEventSuccess,
  createEventFailure,
} from '../actions/eventsActions'

function* fetch() {
  const response = yield call(api.getEvents)
  yield put(
    response.isOk
      ? fetchEventsSuccess(response.data)
      : fetchEventsFailure(response.error)
  )
}

function* create({ payload: event }) {
  call(addEvent, event)
  const response = yield call(api.createEvent, event)
  yield put(
    response.isOk
      ? createEventSuccess(response.data)
      : createEventFailure(response.error)
  )
}

function* remove(action) {
  const { payload: id } = action
  const response = yield call(api.deleteEvent, id)
  yield put(
    response.isOk ? removeEventSuccess(id) : removeEventFailure(response.error)
  )
}

export function* eventsNavigationSaga() {
  const response = yield call(api.getEvents)
  yield put(
    response.isOk
      ? fetchEventsSuccess(response.data)
      : fetchEventsFailure(response.error)
  )
}

export function* eventsSaga() {
  yield takeLatest(actionTypes.FETCH_EVENTS_START, fetch)
  yield takeLatest(actionTypes.CREATE_EVENT_START, create)
  yield takeLatest(actionTypes.REMOVE_EVENT_START, remove)
}
