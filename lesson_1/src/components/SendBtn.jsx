import React from 'react'

const SendBtn = () => {
    const click = event => {
        event.preventDefault()
        console.log('Новое сообщение')
    }
    return (
        <button onClick={click}>Отправить</button>
    )
}

export default SendBtn