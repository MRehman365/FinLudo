// Navbar.js
import { LiaRupeeSignSolid } from "react-icons/lia";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from "react-icons/bi";
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
import money from './Assets/global-rupeeIcon.png'
import bag from './Assets/notification2.png'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="top-section flex justify-around">
        <div className="logo flex gap-5">
        <button className="menu-toggle" onClick={toggleNavbar}>
        <BiMenuAltLeft />
        </button>
          {/* Your logo image or text */}
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <div className="flex gap-3">
          <div className="h-[30px] border-[#797979cc] border rounded bg-[#e7e7e7cc] flex items-center p-4  gap-2">
            <div><img src={money} alt="" className="w-[20px]" /></div>
            <div className="flex items-center font-medium justify-center flex-col"><p className="text-[12px] text-[#5c5c5c]">cash</p><p className="text-[12px] font-medium text-[#5c5c5c] flex items-center"><LiaRupeeSignSolid />0</p></div>
          </div>
          <div className="h-[30px] border-[#797979cc] border rounded bg-[#e7e7e7cc] flex items-center p-4  gap-2">
            <div><img src={bag} alt="" className="w-[20px]" /></div>
            <div className="flex items-center font-medium justify-center flex-col"><p className="text-[12px] text-[#5c5c5c]">Earning</p><p className="text-[12px] font-medium text-[#5c5c5c] flex items-center"><LiaRupeeSignSolid />0</p></div>
          </div>
        </div>
        
      </div>
      <ul className="menu">
        {/* Example list of menu items */}
        <li>
          <Link to="/profile">
           <span className='menu-name'><img src={profile} alt="" /> My Profile</span> <span className="arrow">➔</span>
          </Link>
        </li>
        <li>
          <Link to="/">
          <span className='menu-name'><img src={Win} alt="" /> Win Cash</span> <span className="arrow">➔</span>
          </Link>
        </li>
        <li>
          <Link to="/wallet">
          <span className='menu-name'><img src={Wallet} alt="" /> My Wallet</span> <span className="arrow">➔</span>
          </Link>
        </li>
        <li>
          <Link to="/game-history">
          <span className='menu-name'><img src={Games} alt="" /> Games History</span> <span className="arrow">➔</span>
          </Link>
        </li>
        <li>
          <Link to="/transacion">
          <span className='menu-name'><img src={Transctions} alt="" /> Transctions History</span> <span className="arrow">➔</span>
          </Link>
        </li>
        <li>
          <Link to="/refer">
          <span className='menu-name'><img src={Refer} alt="" /> Refer & Earn</span> <span className="arrow">➔</span>
          </Link>
        </li>
        <li>
          <Link to="/refer-history">
          <span className='menu-name'><img src={Refer} alt="" />Referral History</span> <span className="arrow">➔</span>
          </Link>
        </li>
        <li>
          <Link to="/alert">
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
