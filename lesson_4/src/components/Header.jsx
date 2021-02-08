import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import '../styles/Header.css'

export default class Header extends React.Component {
    static Proptypes = {
        chatId: PropTypes.number,
    } 

    static defaultProps = {
        chatId: 1,
    }

    render() {
        return (
            <div className='header'>
                chat { this.props.chatId }
                <Link to='/profile/'>user profile</Link>
            </div>
        )
    }
}