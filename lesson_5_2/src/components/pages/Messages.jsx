import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import MessageList from '../MessageList'
import AddMessage from '../AddMessage'
import '../../styles/MessageList.css'

import { sendMessage } from '../../store/actions/message'

class Messages extends React.Component {

  state = {
    messages: [
      {message: 'message 0', author: 'robot', id: 0},
      {message: 'message 1', author: 'robot', id: 1},
      {message: 'message 2', author: 'robot', id: 2},
      {message: 'message 3', author: 'robot', id: 3},
      {message: 'message 4', author: 'robot', id: 4},
      {message: 'message 5', author: 'robot', id: 5},
      {message: 'message 6', author: 'robot', id: 6},
      {message: 'message 7', author: 'robot', id: 7},
      {message: 'message 8', author: 'robot', id: 8}
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
    chatId: PropTypes.number
  }

  static defaultProps = {
    chatId: 1
  }

  send = objMsg => {
    const newMesId = this.state.messages.length
    this.setState({ messages: [...this.state.messages, {...objMsg, id: newMesId}] })
    
    this.props.sendMessage(objMsg.message, objMsg.author, this.props.chatId)

    const chats = {...this.props.chatsStore}
    chats[this.props.chatId].messages.push(newMesId)
    this.setState({chats: {...chats}})
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.messagesStore.length < this.props.messagesStore.length &&
      this.props.messagesStore[this.props.messagesStore.length - 1].author === "me") {
        setTimeout(
          () => this.send ({message: "Не приставай ко мне, я робот!", author: "robot"}),
          1000
      );
    }
  }

  render() {
    // если messages - объект, то фильтрация: this.state.chats[this.props.chatId].messages.map(item => this.state.messages[item])
    return (
      <div>
        <h3 className='chat-name'>{this.props.chatsStore[this.props.chatId].name}</h3>
        <MessageList messages={this.props.messagesStore.filter(({id}) => this.props.chatsStore[this.props.chatId].messages.includes(id))} />
        <AddMessage send={this.send} />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  messagesStore: store.messagesReducer,
  chatsStore: store.chatsReducer
})

const mapDispatchToProps = {
  sendMessage: sendMessage,
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)