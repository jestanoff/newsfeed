let commentsReducer =  function(state = {}, action) {
    switch (action.type) {
        case 'FETCH_COMMENTS_DATA':
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
                items: [...action.comments]
            })
        default:
            return state;
    }
}

export default commentsReducer
