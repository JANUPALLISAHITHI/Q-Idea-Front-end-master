import { useEffect } from "react";
import Header from "../components/Header";
import MobileNavBar from "../components/MobileNavBar";
import RightBar from "../components/RightBar";
import SideBar from "../components/SideBar";
import { useLocation } from "react-router-dom";

function Layout({ children }) {

    return (
      <div className="layout">
        <Header />
        <div className="main-content">
          <div className="sidebar">
  
          <SideBar />
          </div>
          <div className="page-content">{children}</div>
          <div className="right-sidebar sidebar">
            <RightBar />
          </div>
          <div className="mobile-nav-bar">

          <MobileNavBar />
          </div>
        </div>
      </div>
    )
  }
  export default Layout;