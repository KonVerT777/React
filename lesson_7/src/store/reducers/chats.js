import { SUCCESS_CHATS_LOADING, START_CHATS_LOADING, ERROR_CHATS_LOADING } from '../actions/chat'


const initState = {
    1: {
        name: 'Chat 1',
        messages: [0, 2, 3, 4]
    },
    2: {
        name: 'Chat 2',
        messages: [1, 5, 8]
    },
    3: {
        name: 'Chat 3',
        messages: [6, 7]
    }
}

export default function chatsReducer(store = initState, action) {
    switch(action.type){
        case SUCCESS_CHATS_LOADING:
            return [...action.payload.entities.chats];
        case START_CHATS_LOADING:
        case ERROR_CHATS_LOADING:
        default: 
            return store;
    };
}
