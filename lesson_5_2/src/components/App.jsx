import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from './Header'
import ChatList from './ChatList'
import Router from './Router'
import initStore from '../store'

import '../styles/App.css'


export default class App extends React.Component {


  render() {
    console.log("render");
    return (
      <main className="main">
        <Provider store={initStore()}>
          <BrowserRouter>
            <div className="layout" style={{ width: "70%", margin: "auto" }}>
              <Header chatId={this.props.chatId}/>
              <div
                className="layout-body"
                style={{ display: "flex", width: "100%" }}
              >
                <div
                  className="layout-body-left"
                  style={{
                    paddingTop: "50px",
                    width: "30%",
                    height: "402px",
                    backgroundColor: "#ffcc5c",
                  }}
                >
                  <ChatList chatId={this.props.chatId}/>
                </div>
                <div className="layout-body-right" style={{ width: "100%" }}>
                  <Router />
                </div>
              </div>
            </div>
          </BrowserRouter>
        </Provider>
      </main>
    )
  }
}