let commentsReducer =  function(comment = {}, action) {
    switch (action.type) {
        case 'CREATE_USER_ID':
            return {
                author: comment.author,
                id: comment.id,
                relative_id: comment.relative_id,
                body: comment.body,
                posted_at: comment.posted_at,
                updated_at: comment.updated_at,
                author_avatar: comment.author_avatar,
            }
        default:
            return comment;
    }
}

export default commentsReducer
