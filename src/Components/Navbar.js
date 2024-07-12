// Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi'; // Example icon from react-icons
import logo from './Assets/vplay-logo.png'
import './Navbar.css'; // Import your CSS file
import profile from './Assets/Avatar2.png'
import Wallet from './Assets/sidebar-wallet.png'
import Win from './Assets/gamepad.png'
import Games from './Assets/sidebar-gamesHistory.png'
import Transctions from './Assets/order-history.png'
import Refer from './Assets/sidebar-referEarn.png'
import Download from './Assets/dw.png'
import Notification from './Assets/sidebar-notifications.png'
import Support from './Assets/sidebar-support.png'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="top-section">
        <div className="logo">
          {/* Your logo image or text */}
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <button className="menu-toggle" onClick={toggleNavbar}>
          <FiMenu />
        </button>
      </div>
      <ul className="menu">
        {/* Example list of menu items */}
        <li>
          <Link to="/menu1">
           <span className='menu-name'><img src={profile} alt="" /> My Profile</span> <span className="arrow">➔</span>
          </Link>
        </li>
        <li>
          <Link to="/menu2">
          <span className='menu-name'><img src={Win} alt="" /> Win Cash</span> <span className="arrow">➔</span>
          </Link>
        </li>
        <li>
          <Link to="/menu3">
          <span className='menu-name'><img src={Wallet} alt="" /> My Wallet</span> <span className="arrow">➔</span>
          </Link>
        </li>
        <li>
          <Link to="/menu4">
          <span className='menu-name'><img src={Games} alt="" /> Games History</span> <span className="arrow">➔</span>
          </Link>
        </li>
        <li>
          <Link to="/menu5">
          <span className='menu-name'><img src={Transctions} alt="" /> Transctions History</span> <span className="arrow">➔</span>
          </Link>
        </li>
        <li>
          <Link to="/refer">
          <span className='menu-name'><img src={Refer} alt="" /> Refer & Earn</span> <span className="arrow">➔</span>
          </Link>
        </li>
        <li>
          <Link to="/menu7">
          <span className='menu-name'><img src={Refer} alt="" />Referral History</span> <span className="arrow">➔</span>
          </Link>
        </li>
        <li>
          <Link to="/menu8">
          <span className='menu-name'><img src={Notification} alt="" />Notification</span> <span className="arrow">➔</span>
          </Link>
        </li>
        <li>
          <Link to="/menu9">
          <span className='menu-name'><img src={Download} alt="" /> Download</span> <span className="arrow">➔</span>
          </Link>
        </li>
        <li>
          <Link to="/support">
          <span className='menu-name'><img src={Support} alt="" />Support</span> <span className="arrow">➔</span>
          </Link>
        </li>
      </ul>
    </nav>
    {/* Backdrop for darkening the background */}
    {isOpen && <div className="backdrop" onClick={toggleNavbar}></div>}
    </>
  );
};

export default Navbar;
