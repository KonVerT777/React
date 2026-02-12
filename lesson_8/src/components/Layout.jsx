import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import ChatList from './ChatList'
import App from './App'

export default class Layout extends React.Component {
  static PropTypes = {
    chatId: PropTypes.number,
  }

  static defaultProps = {
    chatId: 1,
  }

  render() {
    return (
      <div className="layout" style={{ width: "70%", margin: "auto" }}>
        <Header chatId={this.props.chatId}/>
        <div className="layout-body" style={{ display: "flex", width: "100%" }}>
          <div
            className="layout-body-left"
            style={{
              width: "30%",
              height: "auto",
              backgroundColor: "#ffcc5c",
            }}
          >
            <ChatList />
          </div>
          <div className="layout-body-right" style={{ width: "100%" }}>
            <App chatId={this.props.chatId} />
          </div>
        </div>
      </div>
    );
  }
}