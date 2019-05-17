import { createStore, applyMiddleware, compose } from 'redux'
import todoSagas from './sagas'
import reducer from './reducer'
import Saga from 'redux-saga'

const sagaMiddleware = Saga()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore(reducer, enhancer)

sagaMiddleware.run(todoSagas)
export default store
