import React, { Component } from "react"

export default class PostTags extends React.Component {
    render() {
        return (
            <div className="tags">
                {
                    this.props.post.tags.length ? this.props.post.tags.map((tag) => {return tag.name}):''
                }
            </div>
        )
    }
}
