import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ChatIcon from '@material-ui/icons/Chat';
import { Link } from 'react-router-dom'

export default class ChatList extends React.Component {
  static PropTypes = {
    chatId: PropTypes.number.isRequired
  }
    
  render() {
    return (
      <div className="chat-list">
        <List component="nav" aria-label="main mailbox folders">
          <Link to="/chat/1/">
            <ListItem button>
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary="Chat 1" />
            </ListItem>
          </Link>
          <Link to="/chat/2/">
            <ListItem button>
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary="Chat 2" />
            </ListItem>
          </Link>
          <Link to="/chat/3/">
            <ListItem button>
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary="Chat 3" />
            </ListItem>
          </Link>
        </List>
      </div>
    );
  }
}