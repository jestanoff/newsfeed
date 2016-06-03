import React, { Component } from 'react'
import PostHeader from './PostHeader'
import PostBody from './PostBody'
import PostTags from './PostTags'
import CommentsList from './CommentsList'
import CommentsCounter from './CommentsCounter'

export default class Post extends React.Component {

    render() {
        return (
            <article className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="inner-post">
                    <PostHeader actions={this.props.actions} post={this.props.post} />
                    <PostBody actions={this.props.actions} post={this.props.post} />
                    <PostTags actions={this.props.actions} post={this.props.post} />
                    <CommentsCounter actions={this.props.actions} post={this.props.post} />
                    <CommentsList actions={this.props.actions} post={this.props.post} />
                </div>
            </article>
        )
    }
}
