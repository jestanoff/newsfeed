import React, { Component } from "react"

export default class CommentsCounter extends React.Component {
    render() {
        const { comments_count } = this.props.post;

        if( comments_count > 2 ) {
            return (
                <div className="comments-counter">
                    <i className="fa fa-comments-o" aria-hidden="true"></i>
                    <span className="comments-counter-link">
                    {
                        comments_count > 2 ? comments_count - 2 + ' more comments' : ''
                    }

                    </span>
                </div>
            )
        } else {
            return <div className='comments-counter no-more-comments'>comments</div>;
        }
    }
}
