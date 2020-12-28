import React from 'react'
import PropTypes from 'prop-types'

// const Message = ({text}) => <span>{text}</span>;

export default class Message extends React.Component {
    static propTypes = {
        message: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    }

    render() {
        return <div><strong>{this.props.author}</strong>: {this.props.message}</div>
    }
}