import { all } from 'redux-saga/effects'
import { navigationSaga } from './navigationSaga'
import { eventsSaga } from './eventsSaga'

export function* rootSaga() {
  yield all([navigationSaga(), eventsSaga()])
}
