const initState ={
    user: {
        name: 'Vera', 
        birthday: '21 November',
        pic: 'https://themified.com/friend-finder/images/users/user-1.jpg'

    }
}

export default function profileReducer (store = initState, action) {
    return store
}