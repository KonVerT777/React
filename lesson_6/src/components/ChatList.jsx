import React from "react";
import PropTypes from "prop-types";
import { push } from "connected-react-router";
import { connect } from 'react-redux'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChatIcon from "@material-ui/icons/Chat";
import { Link } from "react-router-dom";

class ChatList extends React.Component {
  static PropTypes = {
    chatId: PropTypes.number.isRequired,
  }

  render() {
    return (
      <div className="chat-list">
        <List component="nav" aria-label="main mailbox folders">
          {/* <Link to="/chat/1/"> */}
            <ListItem button onClick={() => this.props.push('/chat/1')}>
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText style={{color: 'darkcyan', textDecoration: 'underline'}} primary="Chat 1" />
            </ListItem>
          {/* </Link> */}
          {/* <Link to="/chat/2/"> */}
            <ListItem button onClick={() => this.props.push('/chat/2')}>
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText style={{color: 'darkcyan', textDecoration: 'underline'}} primary="Chat 2" />
            </ListItem>
          {/* </Link> */}
          {/* <Link to="/chat/3/"> */}
            <ListItem button onClick={() => this.props.push('/chat/3')}>
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText style={{color: 'darkcyan', textDecoration: 'underline'}} primary="Chat 3" />
            </ListItem>
          {/* </Link> */}
        </List>
      </div>
    );
  }
}

const mapStateToProps = store => ({})
const mapDispatchToProps = {
  push
}

export default connect (mapStateToProps, mapDispatchToProps)(ChatList)
