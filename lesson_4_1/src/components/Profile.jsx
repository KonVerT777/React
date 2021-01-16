import React from 'react'
import '../styles/Profile.css'


export default class Profile extends React.Component {

    render() {
    return (
      <div className="content">
        <div className="avatar">
          <img src="https://themified.com/friend-finder/images/users/user-1.jpg" />
          <ul>
            <li className="name">Vera K.</li>
            <li>Date of Birth: 21 November</li>
            <li>
            </li>
          </ul>
        </div>
      </div>
    );
}
}

