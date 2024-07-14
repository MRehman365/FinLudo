import React, { useState } from 'react';
import { LuPencilLine } from "react-icons/lu";
import wallet from './Assets/sidebar-wallet.png'
import img1 from './Assets/sidebar-referEarn.png'
import img2 from './Assets/global-cash-won-green-circular.png'
import img3 from './Assets/global-purple-battleIcon.png'
import img4 from './Assets/referral-signup-bonus-new.png'
import profile from './Assets/Avatar2.png'
import { IoMdCheckmark } from "react-icons/io";
import { Link } from 'react-router-dom';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState('WLLGL230');
  
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const handleInputChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handleBlur = () => {
      setIsEditing(false);
    };
  return (
    <div>
      <div className="flex flex-col items-center p-4 bg-card text-card-foreground rounded-lg shadow-md mt-[60px]">
      <img src={profile} alt="User avatar" className="rounded-full mb-2 h-[100px]" />
      <p className="text-muted-foreground">+913167811079</p>
      <h2 className="font-bold text-lg flex items-center">
        {isEditing ? (
          <input
            type="text"
            value={username}
            onChange={handleInputChange}
            onBlur={handleBlur}
            autoFocus
            className="border rounded p-1"
          />
        ) : (
          <>
            {username}
            <LuPencilLine onClick={handleEditClick} />
          </>
        )}
      </h2>
      <Link to="/wallet" className="w-full"><div className="flex items-center mt-4 w-full border border-border rounded-lg p-2">
        <img src={wallet} className="h-[30px] mr-[30px]" alt="wallet-icon" />
        <span className="text-gray text-[1.1rem]">My Wallet</span>
      </div>
      </Link>
    </div>
    <div className="p-4 space-y-8 bg-card text-card-foreground rounded-lg shadow-lg">
              <div className="flex items-center space-x-3">
                <img src={img1} alt="user-plus" className="h-[30px]" />
                <input type="text" placeholder='Refer Code' className="border-b-2 h-[40px] w-[200px]" />
                <IoMdCheckmark className='text-[30px] text-[green]' />
              </div>
        
              <div className="flex items-center">
                    <img src={img2} alt="cash" className="w-8 h-8  mr-[20px]" />
                <div>
                  <span className="text-[0.9rem] font-semibold">CASH WON</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-[gray] text-lg font-bold">₹0</span>
                  </div>
                </div>
              </div>
        
              <div className="flex items-center">
                <img src={img4} alt="celebration" className="w-8 h-8  mr-[20px]" />
                <div>
                  <span className="text-[0.9rem] font-semibold">TOTAL REFERAL EARNINGS:</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-[gray] text-lg font-bold">₹0</span>
                    <a href="#" className="text-accent font-semibold">
                      Reedem
                    </a>
                  </div>
                </div>
              </div>
        
              <div className="flex items-center space-x-5">
                <img src={img3} alt="battle" className="w-8 h-8 bg-red-500 rounded-full p-1" />
                <div>
                  <span className="text-[0.9rem] font-semibold">BATTLE PLAYED</span>
                  <div className="text-[gray] text-lg font-bold">0</div>
                </div>
              </div>
            </div>
            <button className=' w-[90%] ml-[5%] border border-[#d3ffd3] hover:bg-[#d3ffd3] shadow-lg rounded-sm font-bold text-[1.4rem] text-gray-500 mt-4 p-2'>Log Out</button>
    </div>
  )
}

export default Profile
