import React from 'react';
// import { faHome, faEnvelope, faPhone, faVideo, faHouse} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import { useState } from 'react';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
  };

  return (
    <header className="header-container">
        <div className={`hamburger-sidebar ${isOpen ? 'open' : ''}`}>
            <div className="hamburger-button" onClick={toggleSidebar}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div className="sidebar-content">
              <nav>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </nav>
            </div>
        </div>
        <div className="logo">
            <img className="logo-image" src='/astrolive3-01.png' alt="Logo" />
        </div>
      {/* <nav className="nav-menu">
        <ul>
          <li><a href="#"><FontAwesomeIcon icon={faHouse} /></a></li>
          <li><a href="#"><img className="live-image" src='/chat.png' alt="Logo" /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faVideo} /></a></li>
          <li><a href="#"><img className="live-image" src='/live.png' alt="Logo" /></a></li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
