import React, { Component } from "react"
import _ from 'lodash'

export default class PostBody extends React.Component {
    constructor() {
        super();
        this.state = { showMoreLink: true }
        this.handleMoreLinkClick = this.handleMoreLinkClick.bind(this);
    }

    handleMoreLinkClick() {
        this.setState({ showMoreLink : false });
    }

    render() {
        let { body } = this.props.post;
        let showMoreLink = this.state.showMoreLink;

        if(showMoreLink) {
            body = _.truncate(body, {'length': 250})
        }
        if(body.length < 250) { showMoreLink = false }

        return (
            <content>
                <div className='body' dangerouslySetInnerHTML={{ __html: body}} />
                {showMoreLink ?
                    <span className="more-link" onClick={this.handleMoreLinkClick}>[show more]</span>
                 : ''}

            </content>
        )
    }
}
