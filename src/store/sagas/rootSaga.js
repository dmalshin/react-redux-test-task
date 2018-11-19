import { all } from 'redux-saga/effects'
import { navigationSaga } from './navigationSaga'
import { itemsSaga } from './itemsSaga'

export function* rootSaga() {
  yield all([navigationSaga(), itemsSaga()])
}
