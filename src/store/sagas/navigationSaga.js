import { takeLatest, call } from 'redux-saga/effects'
import { itemsNavigationSaga } from './itemsSaga'

// prettier-ignore
const SAGA_FOR_ROUTE = {
  '/'     : itemsNavigationSaga,
};

export function* handleNavigation(action) {
  const location = action.payload
  const saga = SAGA_FOR_ROUTE[location.route]

  if (saga) {
    yield call(saga)
  }
}

export function* navigationSaga() {
  yield takeLatest('ROUTER_LOCATION_CHANGED', handleNavigation)
}
