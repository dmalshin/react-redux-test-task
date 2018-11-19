import { all } from 'redux-saga/effects'
import { navigationSaga } from './navigationSaga'
import { itemsSaga } from './itemsSaga'
import { formSaga } from './formSaga'

export function* rootSaga() {
  yield all([navigationSaga(), itemsSaga(), formSaga()])
}
