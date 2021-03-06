import React, { Component } from "react"
import Comment from './Comment'

export default class CommentsList extends React.Component {

    validateCommentContent(comment) {
        if(comment.body !== undefined) {
            return <Comment actions={this.props.actions} comment={comment} key={comment.id} />
        }
    }

    render() {
        const { comments } = this.props.post;
        return (
            <div className="comments-list">
                { comments.length ?
                    comments.map( (comment) => {
                        return this.validateCommentContent(comment)
                    })
                : <a href="#" className="btn btn-default btn-xs"> Add comment </a>
                }
            </div>
        )
    }
}
