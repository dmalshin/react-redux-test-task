import { call, put, takeLatest } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
import * as api from '../../api'
import {
  fetchItemsSuccess,
  fetchItemsFailure,
  removeItemSuccess,
  removeItemFailure,
  addItem,
  createItemSuccess,
  createItemFailure,
} from '../actions/itemsActions'

function* fetch() {
  const response = yield call(api.getItems)
  yield put(
    response.isOk
      ? fetchItemsSuccess(response.data)
      : fetchItemsFailure(response.error)
  )
}

function* create({ payload: item }) {
  call(addItem, item)
  const response = yield call(api.createItem, item)
  yield put(
    response.isOk
      ? createItemSuccess(response.data)
      : createItemFailure(response.error)
  )
}

function* remove(action) {
  const { payload: id } = action
  const response = yield call(api.deleteItem, id)
  yield put(
    response.isOk ? removeItemSuccess(id) : removeItemFailure(response.error)
  )
}

export function* itemsNavigationSaga() {
  const response = yield call(api.getItems)
  yield put(
    response.isOk
      ? fetchItemsSuccess(response.data)
      : fetchItemsFailure(response.error)
  )
}

export function* itemsSaga() {
  yield takeLatest(actionTypes.FETCH_ITEMS_START, fetch)
  yield takeLatest(actionTypes.CREATE_ITEM_START, create)
  yield takeLatest(actionTypes.REMOVE_ITEM_START, remove)
}
