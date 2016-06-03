import React, { Component } from "react"
import _ from 'lodash'

export default class PostBody extends React.Component {
    render() {
        let { body } = this.props.post;
        return (
            <content>
                <div className='body' dangerouslySetInnerHTML={
                    {__html: _.truncate(body, {'length': 250})}
                } />
                <span className="more-link">[ more ]</span>
            </content>
        )
    }
}
