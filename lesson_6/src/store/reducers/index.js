import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import messagesReducer from './messages'
import chatsReducer from './chats'
import profileReducer from './profile'

export default history => combineReducers({
    router: connectRouter(history),
    messagesReducer,
    chatsReducer,
    profileReducer
})