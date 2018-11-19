import './styles/index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Root } from './components/app'
import registerServiceWorker from './lib/registerServiceWorker'
import { configureStore } from './store'

const store = configureStore()

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
registerServiceWorker()
