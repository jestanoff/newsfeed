import React, { Component } from 'react'
import moment from 'moment';
import _ from 'lodash'

export default class Comment extends React.Component {

    render() {
        const { author, updated_at, body} = this.props.comment;
        return (
            <div className="comment">
                <hr className="comment-hr" />
                <header>
                    <img src={author.avatar} alt="avatar" className="avatar"/>
                    <span className="author">{author.display_name}</span>
                    <time dateTime={updated_at}>
                    {
                        (moment(updated_at).startOf('hour').fromNow())
                            .replace(/ ago/ig, '')
                            .replace(/month/ig, 'mnth')
                            .replace(/hour/ig, 'hr')
                            .replace(/minute/ig, 'min')
                    }
                    </time>
                </header>
                <div className="comment-content" dangerouslySetInnerHTML={
                    {__html: _.truncate(body, {'length': 150}) }} />
                <span className="more-link">[ more ]</span>
            </div>
        )
    }
}
