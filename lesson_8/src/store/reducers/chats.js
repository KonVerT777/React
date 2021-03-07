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
  return store
}