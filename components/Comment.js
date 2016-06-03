import React, { Component } from 'react'

export default class Comment extends React.Component {

    handleNewId() {
        this.props.actions.createNewUserId()
    }

    handleNewIdIfOdd() {
        this.props.actions.createNewUserIdIfOdd()
    }

    handleNewIdAsync() {
        this.props.actions.createNewUserIdAsync()
    }

    render() {
        return (
            <li>
                <h2> This is a <b>Comment</b></h2>
                <div>username: {this.props.user.username}</div>
                <div>id: {this.props.user.id}</div>
                <button onClick={this.handleNewId.bind(this)}>Update with Random ID</button>
                <button onClick={this.handleNewIdIfOdd.bind(this)}>Update only if odd</button>
                <button onClick={this.handleNewIdAsync.bind(this)}>Update async</button>
            </li>
        )
    }
}
