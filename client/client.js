import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

let initialState = {
    posts: {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: Date.now(),
        items: []
    },
    comments: {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: Date.now(),
        items: []
    }
}

let store = configureStore(initialState)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('newsfeed')
)
