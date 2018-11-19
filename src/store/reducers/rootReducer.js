import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { itemsReducer } from './itemsReducer'
import { routerReducer } from './routerReducer'

export const rootReducer = combineReducers({
  router: routerReducer,
  items: itemsReducer,
  form: formReducer,
})
