import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let finalCreateStore = compose(
    applyMiddleware(
        thunk,
        logger()
    )
)(createStore)


export default function configureStore(initialState = {
        posts: [],
        comments: []
    } ) {
    return finalCreateStore(rootReducer, initialState)
}
