import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice'
import { Link } from 'react-router-dom'

export default class ChatList extends React.Component {
    
    
    render() {
        return (
          <div className="chat-list">
            <List component="nav" aria-label="main mailbox folders">
              <Link to="/chat/1/">
                <ListItem button>
                  <ListItemIcon>
                    <LocalPostOfficeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Chat 1" />
                </ListItem>
              </Link>
              <Link to="/chat/2/">
                <ListItem button>
                  <ListItemIcon>
                    <LocalPostOfficeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Chat 2" />
                </ListItem>
              </Link>
              <Link to="/chat/3/">
                <ListItem button>
                  <ListItemIcon>
                    <LocalPostOfficeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Chat 3" />
                </ListItem>
              </Link>
            </List>
          </div>
        )
    }
}