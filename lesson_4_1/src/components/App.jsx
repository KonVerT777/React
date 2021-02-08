import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './Header'
import ChatList from './ChatList'
import Router from './Router'
import '../styles/App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeout: null,
      messages: [{ author: "robot", message: "Привет!" }],
      interval: null,
    }
  }


  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.messages.length < this.state.messages.length &&
  //     this.state.messages[this.state.messages.length - 1].author === "me"
  //   ) {
  //     setTimeout(
  //       () =>
  //         this.setState({
  //           messages: [
  //             ...this.state.messages,
  //             { message: "Не приставай ко мне, я робот!", author: "robot" },
  //           ],
  //         }),
  //       1000
  //     )
  //   }
  // }

  render() {
    console.log("render");
    return (
      <main className="main">
        <BrowserRouter>
          <div className="layout" style={{ width: "70%", margin: "auto" }}>
            <Header chatId={this.props.chatId} />
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
      </main>
    )
  }
}