import React, { Component } from "react"
import PostTopics from "./PostTopics"
import moment from 'moment'

export default class PostHeader extends React.Component {
    render() {
        const { updated_at, subject, author } = this.props.post
        return (
            <header>
                <h2>
                    <span>{subject}</span>
                    <PostTopics actions={this.props.actions} post={this.props.post} />
                </h2>
                <div className='subheader'>
                    <img src={author.avatar} alt='avatar' className='avatar' />
                    <span className="author"> {author.display_name} </span>
                    <time dateTime={updated_at}>
                    {
                        (moment(updated_at).startOf('hour').fromNow())
                            .replace(/ ago/ig, '')
                            .replace(/month/ig, 'mnth')
                            .replace(/hour/ig, 'hr')
                            .replace(/minute/ig, 'min')
                    }
                    </time>
                </div>
            </header>
        )
    }
}
