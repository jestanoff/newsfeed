import React, { Component } from "react"

export default class PostBody extends React.Component {
    render() {
        return (
            <content dangerouslySetInnerHTML={{__html: this.props.post.body}} />
        )
    }
}
