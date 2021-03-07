import React from 'react'

export default class PushNotificationToggle extends React.Component {
    render () {
        return <div className='push'>
            <img className='push_image' src='/images/push-off.png' alt='Push Notification'/>
        </div>
    }
}