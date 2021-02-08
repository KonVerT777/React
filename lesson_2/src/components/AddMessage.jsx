import React from 'react'
import PropTypes from 'prop-types'

export default class AddMessage extends React.Component {
    state = {
        message: ''
    }

    static propTypes = {
        send: PropTypes.func.isRequired
    }

    handleChange = event => {
        this.setState({message: event.target.value})
    }

    send = () => {
        this.props.send({message: this.state.message, author: 'me'})
        this.setState({message: ''})
    }

    render() {
        return <div>
                    <textarea value={this.state.message} onChange={this.handleChange}></textarea>
                    <button onClick={this.send}>Отправить</button>
        </div>
    }
}