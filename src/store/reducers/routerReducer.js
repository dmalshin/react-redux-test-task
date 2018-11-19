import { routerForBrowser } from 'redux-little-router'
import { routes } from '../../config/routes'

const router = routerForBrowser({ routes })

export const routerReducer = router.reducer

export const routerMiddleware = router.middleware

export const routerEnhancer = router.enhancer
