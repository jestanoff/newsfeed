import React, { Component } from "react"

export default class PostTags extends React.Component {
    validateTagContent(post) {
        if(post.tags.length) {
            return true
        }
    }

    render() {
        const { tags } = this.props.post;
        if( this.validateTagContent(this.props.post) ) {
            return (
                <div className="tags">
                    <i className="fa fa-tags" aria-hidden="true"></i>
                    <span className="tag">
                    {
                        tags.length ? tags.map((tag) => {return tag.name}):''
                    }
                    </span>
                </div>
            )
        } else {
            return (
                <div className="no-tags"> <hr /> </div>
            )
        }
    }
}
