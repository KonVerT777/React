import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from "connected-react-router"
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
        <span onClick={() => this.props.push('/profile')}>User profile</span>
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  profileStore: store.profileReducer
})

const mapDispatchToProps = {
  push
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)