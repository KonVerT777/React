import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import '../styles/Header.css'

class Header extends React.Component {
  static Proptypes = {
    chatId: PropTypes.number,
  }

  render() {
    const user = this.props.profileStore.user

    return (
      <div className="header">
        chats {this.props.chatId}
        <p>{user.name}</p>
        <Link to="/profile/">user profile</Link>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  profileStore: store.profileReducer
})

export default connect(mapStateToProps)(Header)
