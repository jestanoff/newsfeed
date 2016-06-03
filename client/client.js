import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

let initialState = {
    isFetching: false,
    didInvalidate: false,
    lastUpdated: Date.now(),
    fetchedPageCount: 0,
    posts: [],
    comments: []
}

let store = configureStore(initialState)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('newsfeed')
)
