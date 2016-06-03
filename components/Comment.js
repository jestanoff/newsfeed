import React, { Component } from 'react'
import moment from 'moment';
import _ from 'lodash'

export default class Comment extends React.Component {
    constructor() {
        super();
        this.state = { showMoreLink: true }
        this.handleMoreLinkClick = this.handleMoreLinkClick.bind(this);
    }

    handleMoreLinkClick() {
        this.setState({ showMoreLink : false });
    }

    render() {
        let { author, updated_at, body} = this.props.comment;
        let showMoreLink = this.state.showMoreLink;
        if(showMoreLink) {
            body = _.truncate(body, {'length': 150})
        }
        if(body.length < 150) { showMoreLink = false }

        return (
            <div className="comment">
                <hr className="comment-hr" />
                <header>
                    <img src={author.avatar} alt="avatar" className="avatar"/>
                    <span className="author">{author.display_name}</span>
                    <time dateTime={updated_at}>
                    {
                        (moment(updated_at).startOf('hour').fromNow())
                            .replace(/month/ig, 'mnth')
                            .replace(/hour/ig, 'hr')
                            .replace(/minute/ig, 'min')
                    }
                    </time>
                </header>
                <div className="comment-content" dangerouslySetInnerHTML={
                    {__html: body }} />
                {showMoreLink ?
                    <span className="more-link" onClick={this.handleMoreLinkClick}>[show more]</span>
                 : ''}
            </div>
        )
    }
}
