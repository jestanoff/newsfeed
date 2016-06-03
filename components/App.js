import React, { Component } from 'react'
import NewsFeed from './NewsFeed'
import { connect } from 'react-redux'
import actions from '../redux/actions'
import { bindActionCreators } from 'redux'
import scss from '../styles/main.scss'

class App extends Component {
    render() {
          return (
            <div>
                <NewsFeed posts={this.props.posts.items}
                    actions={this.props.actions } comments={this.props.comments.items} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
