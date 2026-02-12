import {SEND_MESSAGE, SET_MESSAGES, START_MESSAGES_LOADING, SUCCESS_MESSAGES_LOADING, ERROR_MESSAGES_LOADING} from '../actions/message'
import {SUCCESS_CHATS_LOADING, START_CHATS_LOADING, ERROR_CHATS_LOADING} from '../actions/chat'

const initState = [
    {
        message: 'message 0',
        author: 'robot',
        id: 0
    },
    {
        message: 'message 1',
        author: 'robot',
        id: 1
    },
    {
        message: 'message 2',
        author: 'robot',
        id: 2
    },
    {
        message: 'message 3',
        author: 'robot',
        id: 3
    },
    {
        message: 'message 4',
        author: 'robot',
        id: 4
    },
    {
        message: 'message 5',
        author: 'robot',
        id: 5
    },
    {
        message: 'message 6',
        author: 'robot',
        id: 6
    },
    {
        message: 'message 7',
        author: 'robot',
        id: 7
    },
    {
        message: 'message 8',
        author: 'robot',
        id: 8
    }
]

export default function messagesReducer(store = initState, action) {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMesId = store.length
            return [...store, {
                message: action.message,
                author: action.author,
                id: newMesId,
                chatId: action.chatId
            }]
        case SET_MESSAGES:
            return [...action.messages]
        case SUCCESS_MESSAGES_LOADING:
            let chats = {};
            let messages = [];
            const response = action.payload;
            for (let id in response) {
                chats[parseInt(id)] = {
                    name: response[id].name,
                    messages: [...response[id].messages.map(item => parseInt(item.id))]
                };
                messages.push(...response[id].messages.map(item => ({
                    ...item,
                    id: parseInt(item.id)
                })));
            }
            return [...messages];
        case SUCCESS_CHATS_LOADING:
            return [...action.payload.entities.messages];
        case START_MESSAGES_LOADING:
        case ERROR_MESSAGES_LOADING:
        case START_CHATS_LOADING:
        case ERROR_CHATS_LOADING:
        default:
            return store
    }
}