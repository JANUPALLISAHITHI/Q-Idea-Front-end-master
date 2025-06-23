import React, { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
import '../styles/SideBar.css'
const SideBar = () => {
  const location = useLocation()
  const [showMore, setShowMore] = useState(false);
  const moreSectionRef = useRef(null);

  const handleMoreClick = () => {
    setShowMore(!showMore);

    if (!showMore) {
      setTimeout(() => {
        moreSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100); // Delay to ensure rendering happens first
    }
  };


  const mainItems = [
    { name: 'Home', path: '/', icon: HomeIcon, iconFilled: HomeIconFilled },
    { name: 'Create', path: '/create', icon: PlusIcon, iconFilled: PlusIconFilled },
    { name: 'Premium', path: '/premium', icon: PremiumIcon, iconFilled: PremiumIconFilled },
    { name: 'Settings', path: '/settings', icon: SettingsIcon, iconFilled: SettingsIconFilled },
    { name: 'Community', path: '/community', icon: CommunityIcon, iconFilled: CommunityIconFilled },
  ];

  const moreItems = [
    { name: 'Saved', path: '/saved', icon: SavedIcon, iconFilled: SavedIconFilled },
    { name: 'Help', path: '/help', icon: HelpIcon, iconFilled: HelpIconFilled },
    { name: 'Activity', path: '/activity', icon: ActivityIcon, iconFilled: ActivityIconFilled },
    { name: 'Feedback', path: '/feedback', icon: FeedBackIcon, iconFilled: FeedBackIconFilled },
  ];

  return (
    <div className='sidebar-container'>
      <div className="sidebar-top-container">
 
      <ul className="sidebar-items">
      {mainItems.map((item, index) => (
            <li key={index} className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}>
              <Link to={item.path}>
                <span className="sidebar-item-icon">
                  <img src={location.pathname === item.path ? item.iconFilled : item.icon} alt={`${item.name} Icon`} />
                </span>
                <span className="sidebar-item-text">{item.name}</span>
              </Link>
            </li>
          ))}
  <li className="sidebar-item more-sidebar" onClick={handleMoreClick}>
            <span className="sidebar-item-icon">
              <img src={HamburgerIcon} alt="More Icon" />
            </span>
            <span className="sidebar-item-text">{showMore ? 'Less' : 'More'}</span>
          </li>
          
            {showMore && moreItems.map((item, index) => (
              <li key={index} className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}>
                <Link to={item.path}>
                  <span className="sidebar-item-icon">
                    <img src={location.pathname === item.path ? item.iconFilled : item.icon} alt={`${item.name} Icon`} />
                  </span>
                  <span className="sidebar-item-text">{item.name}</span>
                </Link>
              </li>
            ))}
            <div ref={moreSectionRef}>
          </div>
          </ul>
      </div>
      <div className="sidebar-bottom-container">
            <Link to={'/profile/shaik.bhasidh'}>
        <div className="sidebar-profile-logout">
          <div className="spl-profile">
<img src={Avatar} alt="" />
          </div>
          {/* <Link to={'/profile/shaik.bhasidh'}> */}
          <div className="spl-text">
            <span>Shaik Bhasidh</span>
            <span className='sidebar-username'>@shaikbhasidh</span>
          </div>
            {/* </Link> */}
          <div className="spl-icon">
<img src={LogOut} alt="" />
          </div>
        </div>
</Link>
      </div>
    </div>
  )
}

export default SideBar