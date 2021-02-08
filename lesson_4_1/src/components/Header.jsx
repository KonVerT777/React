import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import '../styles/Header.css'

export default class Header extends React.Component {
  static Proptypes = {
    chatId: PropTypes.number,
  }

  render() {
    return (
      <div className="header">
        chats {this.props.chatId}
        <Link to="/profile/">user profile</Link>
      </div>
    )
  }
}