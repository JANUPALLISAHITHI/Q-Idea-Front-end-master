import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import BellIcon from "../assets/svg/bell.svg";
import SearchIcon from "../assets/svg/search1.svg";
import WrongIcon from "../assets/svg/wrong.svg";
import Avatar from "../assets/images/avatar.jpg";
import Logo from '../assets/images/logo.png'
import "../styles/Header.css";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const notificationCount =10;
  return (
    <header id="header">
      <div className="header-logo">
        <Link to={"/"}>
        <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="header-searchbar">
        <div className="header-searchbar-con">
          <div className="header-searchbar-search-icon">
            <img src={SearchIcon} alt="" className="header-icons" />
          </div>
          <input
            className="searchBar"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            type="text"
            placeholder="Search..."
          />
          {
            searchText.length !==0 && (
                <div onClick={()=>{
                    setSearchText("")
                }} className="header-searchbar-clear-icon">
                <img src={WrongIcon} alt="" className="header-icons" />
              </div>
            )
          }
       
        </div>
      </div>
      <div className="header-elems">
        <div className="header-elems-item">
            <Link to={"/notification"}>
            <span className="notification-count">
                {notificationCount}
            </span>
          <img src={BellIcon} alt="" />
            </Link>
        </div>
        <div className="header-elems-item">
          <Link to={"/profile/shaik.bhasidh"}>
          <img src={Avatar} alt="" className="avatar" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
