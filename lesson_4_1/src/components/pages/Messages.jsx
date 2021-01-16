import React from 'react'
import PropTypes from 'prop-types'

import MessageList from '../MessageList'
import AddMessage from '../AddMessage'
import '../../styles/MessageList.css'

export default class Messages extends React.Component {
  state = {
    messages: [
      {message: 'message 0', author: 'robot', id: '0'},
      {message: 'message 1', author: 'robot', id: '1'},
      {message: 'message 2', author: 'robot', id: '2'},
      {message: 'message 3', author: 'robot', id: '3'},
      {message: 'message 4', author: 'robot', id: '4'},
      {message: 'message 5', author: 'robot', id: '5'},
      {message: 'message 6', author: 'robot', id: '6'},
      {message: 'message 7', author: 'robot', id: '7'},
      {message: 'message 8', author: 'robot', id: '8'}
    ],

    chats: {
      1: {
        name: 'Chat 1',
        messages: [0, 2, 3, 4]
      },
      2: {
        name: 'Chat 2',
        messages: [1, 5, 8]
      },
      3: {
        name: 'Chat 3',
        messages: [6, 7]
      },
    }
  }

  static PropTypes = {
    chatId: PropTypes.number,
  }

  static defaultProps = {
    chatId: 1,
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.messages.length < this.state.messages.length &&
      this.state.messages[this.state.messages.length - 1].author === "me"
    ) {
      setTimeout(
        () =>
          this.setState({
            messages: [
              ...this.state.messages,
              { message: "Не приставай ко мне, я робот!", author: "robot" },
            ],
          }),
        1000
      );
    }
  }

  send = objMsg => {
    const newMesId = this.state.messages.length
    this.setState({ messages: [...this.state.messages, {...objMsg, id: newMesId}] })
    const chats = {...this.state.chats}
    chats[this.props.chatId].messages.push(newMesId)
    this.setState({chats: {...chats}})
  };

  render() {
    // если messages - объект, то фильтрация: this.state.chats[this.props.chatId].messages.map(item => this.state.messages[item])
    return (
      <div >
        <h3 className='chat-name'>{this.state.chats[this.props.chatId].name}</h3>
        <MessageList messages={this.state.messages.filter(({id}) => this.state.chats[this.props.chatId].messages.includes(id))} />
        <AddMessage send={this.send} />
      </div>
    );
  }
}