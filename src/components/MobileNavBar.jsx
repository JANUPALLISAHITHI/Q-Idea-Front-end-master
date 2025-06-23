import React from 'react'
import '../styles/mobile.css'
import HomeIcon from '../assets/svg/sidebar_home.svg'
import SettingsIcon from '../assets/svg/sidebar_settings.svg'
import SavedIcon from '../assets/svg/sidebar_saved.svg'
import PlusIcon from '../assets/svg/sidebar_plus.svg'
import PremiumIcon from '../assets/svg/sidebar_premium.svg'
import HamburgerIcon from '../assets/svg/sidebar_hamburger.svg'
import CommunityIcon from '../assets/svg/sidebar_community.svg'
import FeedBackIcon from '../assets/svg/sidebar_feedback.svg'
import HelpIcon from '../assets/svg/sidebar_help.svg'
import ActivityIcon from '../assets/svg/sidebar_activity.svg'
import SettingsIconFilled from '../assets/svg/sidebar_settings_filled.svg'
import SavedIconFilled from '../assets/svg/sidebar_saved_filled.svg'
import PlusIconFilled from '../assets/svg/sidebar_plus_filled.svg'
import PremiumIconFilled from '../assets/svg/sidebar_premium_filled.svg'
import HomeIconFilled from '../assets/svg/sidebar_home_filled.svg'
import CommunityIconFilled from '../assets/svg/sidebar_community_filled.svg'
import FeedBackIconFilled from '../assets/svg/sidebar_feedback_filled.svg'
import HelpIconFilled from '../assets/svg/sidebar_help_filled.svg'
import ActivityIconFilled from '../assets/svg/sidebar_activity_filled.svg'
import LogOut from '../assets/svg/logout.svg'
import Avatar from "../assets/images/avatar.jpg";
import { Link } from 'react-router-dom'

const MobileNavBar = () => {
     const mainItems = [
        { name: 'Home', path: '/', icon: HomeIcon, iconFilled: HomeIconFilled },
        { name: 'Community', path: '/community', icon: CommunityIcon, iconFilled: CommunityIconFilled },
        { name: 'Create', path: '/create', icon: PlusIcon, iconFilled: PlusIconFilled },
        { name: 'Settings', path: '/settings', icon: SettingsIcon, iconFilled: SettingsIconFilled },
        { name: 'Profile', path: '/community', icon: Avatar, iconFilled: CommunityIconFilled },
      ];
    
  return (
    <div className='mobile-nav-bar-container'>
        <ul className="mobile-nav-list">
        {mainItems.map((item, index) => (
            <li key={index} className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}>
              <Link to={item.path}>
                <span className="sidebar-item-icon">
                  <img src={location.pathname === item.path ? item.iconFilled : item.icon} alt={`${item.name} Icon`} />
                </span>
                {/* <span className="sidebar-item-text">{item.name}</span> */}
              </Link>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default MobileNavBar