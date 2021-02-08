import React from 'react'
import PropTypes from 'prop-types'
import { TextField, FloatingActionButton } from 'material-ui'
import SendIcon from 'material-ui/svg-icons/content/send'


export default class AddMessage extends React.Component {
  state = {
    message: "",
  };

  static propTypes = {
    send: PropTypes.func.isRequired,
  };

  handleChange = (event) => {
    this.setState({ message: event.target.value });
  };

  // handleKeyUp = (event) => {
  //   if (event.keyCode === 13) {
  //     this.send(this.state.message, "me");
  //   }
  // };

  send = (event) => {
    event.preventDefault()
    this.props.send({ message: this.state.message, author: "me" });
    this.setState({ message: "" });
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <TextField
          value={this.state.message}
          onChange={this.handleChange}
          // onKeyUp={this.handleKeyUp}
          fullWidth={true}
          hintText="Введите сообщение"
          multiline={true}
          variant="outlined"
        ></TextField>
        <FloatingActionButton onClick={this.send}>
          <SendIcon />
        </FloatingActionButton>
      </div>
    );
  }
}