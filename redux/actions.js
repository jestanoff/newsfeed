import fetch from 'isomorphic-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const FETCH_COMMENTS_DATA = 'FETCH_COMMENTS_DATA';
export const FETCH_POSTS_DATA = 'FETCH_POSTS_DATA';
const postsJSON = 'https://s3-eu-west-1.amazonaws.com/streetlife-coding-challenge/newsfeed.json';
const commentsJSON = '  https://s3-eu-west-1.amazonaws.com/streetlife-coding-challenge/comments.json';

let actions = {
    fetchCommentsData: function() {
        return (dispatch, getState) => fetch(commentsJSON)
            .then(res => res.json())
            .then(json => dispatch({
                type: 'FETCH_COMMENTS_DATA',
                comments: json.comments
            }));
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
