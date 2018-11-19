import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
import { initializeCurrentLocation } from 'redux-little-router'
import { rootSaga } from './sagas'
import { routerMiddleware, routerEnhancer } from './reducers/routerReducer'
import { rootReducer } from './reducers/rootReducer'

export const history = createBrowserHistory()

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    composeWithDevTools(
      routerEnhancer,
      applyMiddleware(thunk, routerMiddleware, sagaMiddleware)
    )
  )

  sagaMiddleware.run(rootSaga)

  const initialRouterState = store.getState().router
  store.dispatch(initializeCurrentLocation(initialRouterState))

  return store
}
