import React from 'react'
import PropTypes from 'prop-types'

import MessageList from '../MessageList'
import AddMessage from '../AddMessage'

export default class Messages extends React.Component {
  state = {
    messages: [],
  };

  static PropTypes = {
    chatId: PropTypes.number,
  };

  static defaultProps = {
    chatId: -1,
  };

  send = (objMsg) => {
    this.setState({ messages: [...this.state.messages, objMsg] });
  };

  render() {
    return (
      <>
        <MessageList messages={this.state.messages} />
        <AddMessage send={this.send} />
      </>
    );
  }
}