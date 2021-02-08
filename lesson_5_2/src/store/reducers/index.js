import { combineReducers } from 'redux'

import messagesReducer from './messages'
import chatsReducer from './chats'
import profileReducer from './profile'

export default combineReducers({
    messagesReducer,
    chatsReducer,
    profileReducer
})