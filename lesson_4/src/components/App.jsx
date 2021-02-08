import React from 'react'

// import Messages from './pages/Messages'
import MessageList from './MessageList'
import AddMessage from './AddMessage'
import '../styles/App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeout: null,
      messages: [{ author: "robot", message: "Привет!" }],
      interval: null,
    };
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

  send = (objMsg) => {
    this.setState({ messages: [...this.state.messages, objMsg] });
  }

  render() {
    console.log("render");
    return (
      <main className="main">
           <MessageList messages={this.state.messages} />
           <AddMessage send={this.send} />
      </main>
    )
  }
}