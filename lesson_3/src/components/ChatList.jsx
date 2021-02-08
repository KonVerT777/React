import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice'

export default class ChatList extends React.Component {
    
    
    render() {
        return (
            <div className='chat-list'>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem button>
                        <ListItemIcon>
                            <LocalPostOfficeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Chat 1" />
                        </ListItem>
                        <ListItem button>
                        <ListItemIcon>
                            <LocalPostOfficeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Chat 2" />
                        </ListItem>
                        <ListItem button>
                        <ListItemIcon>
                            <LocalPostOfficeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Chat 3" />
                        </ListItem>
                    </List>
                </div>
        )
    }
}