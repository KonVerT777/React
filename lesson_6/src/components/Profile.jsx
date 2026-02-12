import React from 'react'
import { connect } from 'react-redux'
import '../styles/Profile.css'


class Profile extends React.Component {

  state = {
      user: {
        name: 'Vera', 
        birthday: '21 November',
        pic: 'https://themified.com/friend-finder/images/users/user-1.jpg'
      }
  }

    render() {
      const user = this.props.profileStore.user
        return (
          <div className="content">
            <div className="avatar">
              <img src={ user.pic } />
              <ul>
                <li className="name">{ user.name }</li>
                <li>{ user.birthday }</li>
                <li>
                </li>
              </ul>
            </div>
          </div>
        );
}
}

const mapStateToProps = store => ({
  profileStore: store.profileReducer
})

export default connect(mapStateToProps)(Profile)

