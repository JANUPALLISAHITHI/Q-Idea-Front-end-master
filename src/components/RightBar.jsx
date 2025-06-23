import React from 'react'
import { Link } from 'react-router-dom'
import Bulb from '../assets/svg/right_bar_bulb.svg';
import Problem from '../assets/svg/right_bar_problems.svg'
import CommunityIcon from '../assets/svg/sidebar_community.svg'
import '../styles/RightBar.css'

const RightBar = () => {

    const suggestedUsers = [
        {
          username: "john_doe",
          fullName: "John Doe",
          profilePicture: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
          username: "jane_smith",
          fullName: "Jane Smith",
          profilePicture: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
          username: "mike_jones",
          fullName: "Mike Jones",
          profilePicture: "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
          username: "emily_white",
          fullName: "Emily White",
          profilePicture: "https://randomuser.me/api/portraits/women/4.jpg"
        },
        {
          username: "david_clark",
          fullName: "David Clark",
          profilePicture: "https://randomuser.me/api/portraits/men/5.jpg"
        },
        {
          username: "sophia_miller",
          fullName: "Sophia Miller",
          profilePicture: "https://randomuser.me/api/portraits/women/6.jpg"
        }
      ];
  return (
    <div className='right-bar-container'>
        <div className="right-bar-top-container">
            <ul className="top-items">
                <li>
                    <Link to={'/'}>
                    <img src={Bulb} alt="ideas" />
                    <span>Trending Ideas</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/'}>
                    <img src={Problem} alt="Problem" />
                    <span>Trending Problems</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/'}>
                    <img src={CommunityIcon} alt="Communities" />
                    <span>Trending Communities</span>
                    </Link>
                </li>
               
            </ul>
        </div>
        <div className="line"></div>
        <div className="right-bar-bottom-container">
        <h3>Suggested Users</h3>
        <ul className="suggested-users-list">
          {suggestedUsers.map((user) => (
            <li key={user.username} className="suggested-user">
              <img
                src={user.profilePicture}
                alt={user.fullName}
                className="user-profile-picture"
              />
              <div className="user-info">
                <span className="user-fullname">{user.fullName}</span>
                <span className="user-username">@{user.username}</span>
              </div>
              <button className="follow-btn">Follow</button>
            </li>
          ))}
        </ul>
        </div>
    </div>
  )
}

export default RightBar