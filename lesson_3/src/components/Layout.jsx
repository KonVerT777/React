import React from 'react'
import Header from './Header'
import ChatList from './ChatList'
import App from './App'

export default class Layout extends React.Component {
    
    render() {
        return(
            <div className='layout' style={{width: '70%', margin: 'auto'}}>
                <Header />
                <div className='layout-body' style={{display: 'flex', width: '100%'}}>
                    <div className='layout-body-left' style={{width: '30%', height: '400px', backgroundColor: '#ffcc5c'}}>
                        <ChatList/>
                    </div>
                    <div className='layout-body-right' style={{width: '100%'}}>
                        <App/>
                    </div>
                </div>
            </div>
        )
    }
}