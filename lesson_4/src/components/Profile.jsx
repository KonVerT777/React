import React from 'react'
import '../styles/Profile.css'


export default class Profile extends React.Component {

    render() {
    return (
      <div className="content">
        <div className="avatar">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9R6WVd7lIJePzBBD2MiZRy511oh9ONh0H_w&usqp=CAU" />
          <ul>
            <li className="name">Vera K.</li>
            <li>Date of Birth: 21 November</li>
            <li>City: Riga</li>
            <li>Education: Master Degree</li>
            <li>
              <button type="confirm">Send massage</button>
            </li>
          </ul>
        </div>
      </div>
    );
}
}

