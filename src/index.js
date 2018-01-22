import React from 'react'
import ReactDOM from 'react-dom'

import thunkMiddleware from 'redux-thunk'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'

import App from './components/App'

import './index.scss'

import registerServiceWorker from './registerServiceWorker'

const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	combineReducers({
		...reducers
	}),
	// Enable Redux DevTools
	composeWithDevTools( applyMiddleware(thunkMiddleware))
)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker()
