import React, { Component } from "react"

export default class PostTopics extends React.Component {
    validateTopicsContent(post) {
        if(post.topics.length) {
            return true
        }
    }

    render() {
        const { topics } = this.props.post;
        if( this.validateTopicsContent(this.props.post) ) {
            return (
                <div className="topics">
                    {
                        topics.length ? topics.map((topic) => {
                            return <span className="topic" key={topic.slug}> {topic.name} </span>
                        }):''
                    }
                </div>
            )
        } else {
            return (
                <div className="no-tags"> <hr /> </div>
            )
        }
    }
}
