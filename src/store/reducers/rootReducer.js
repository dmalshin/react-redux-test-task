import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { eventsReducer } from './eventsReducer'
import { routerReducer } from './routerReducer'

export const rootReducer = combineReducers({
  router: routerReducer,
  events: eventsReducer,
  form: formReducer,
})
