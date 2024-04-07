import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux'
import {thunk} from 'redux-thunk'
import rootReducer from './Reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = applyMiddleware(thunk)

const store = createStore(rootReducer, composeEnhancers(middleware))

export default store