import React, { Component } from "react"
import Post from './Post'

export default class NewsFeed extends React.Component {

    componentWillMount() {
        this.props.actions.fetchPostsData();
    }

    validatePostContent(post) {
        if(post.body !== undefined && post.subject !== undefined) {
            return <Post key={post.id} post={post} actions={this.props.actions}/>
        }
    }

    render() {
        const { posts } = this.props;
        return (
            <div className="container-fluid">
                <div className="newsfeed-container row">
                {
                    posts.map( (post) => {
                        return this.validatePostContent(post);
                    })
                }
                </div>
            </div>
        )
    }
}
