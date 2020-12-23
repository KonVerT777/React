import React from 'react'
import ReactDOM from 'react-dom'

import Message from './Message.jsx'
import SendBtn from './SendBtn.jsx'

const App = (props) => {
    return <main>
                <Message text='Some text'/><br/>
                <SendBtn/>
           </main>
}

export default App