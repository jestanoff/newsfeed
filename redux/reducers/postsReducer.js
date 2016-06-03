import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions'

const postsReducer =  function(state = {}, action) {
    switch (action.type) {
        // case 'REQUEST_POSTS':
        //     return Object.assign({}, state, {
        //         isFetching: true,
        //         didInvalidate: false
        //     })
        // case 'RECEIVE_POSTS':
        //     return Object.assign({}, state, {
        //         isFetching: false,
        //         didInvalidate: false,
        //         items: action.posts,
        //         lastUpdated: action.receivedAt
        //     })
        case 'FETCH_POSTS_DATA':
            return [...action.posts]
        default:
            return state;

    }
}

export default postsReducer
