import { SEND_MESSAGE, sendMessage } from '../actions/message'

export default store => next => action => {

    const dispatch = store.dispatch
    const messages = store.getState().messagesReducer

    switch(action.type) {
        case SEND_MESSAGE:
        if (action.author === 'me') {
            console.log('need send')
            setTimeout(
                () => dispatch(sendMessage('Не приставай ко мне, я робот', 'robot', action.chatId)),
                1000
            )
        }
        break
    }
    return next (action)
}


/*
function (store) {
    return function (next) {
        return function (action) {
        }
    }
}

*/