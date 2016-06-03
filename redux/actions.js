import fetch from 'isomorphic-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const FETCH_POSTS_DATA = 'FETCH_POSTS_DATA';
const postsJSON = 'https://s3-eu-west-1.amazonaws.com/streetlife-coding-challenge/newsfeed.json';

let actions = {
    addTodo: function(text) {
        return {
            type: 'ADD_TODO',
            text: text
        }
    },

    completeTodo: function(id) {
        return {
            type: 'COMPLETE_TODO',
            id: id
        }
    },

    deleteTodo: function(id) {
        return {
            type: 'DELETE_TODO',
            id: id
        }
    },

    createNewUserId: function() {
        return {
            type: 'CREATE_USER_ID',
            id: Math.floor(Math.random()*100)
        }
    },

    createNewUserIdIfOdd: function() {
        return (dispatch, getState) => {
            const { user } = getState()
            if (user.id % 2 === 0) {
                return
            }
            dispatch(actions.createNewUserId())
        }
    },

    fetchPostsData: function() {
        return (dispatch, getState) => fetch(postsJSON)
            .then(res => res.json())
            .then(json => dispatch({
                type: 'FETCH_POSTS_DATA',
                posts: json.messages
            }));
    }

}

export default actions
