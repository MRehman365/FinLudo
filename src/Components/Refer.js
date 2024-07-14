import React from 'react'
import './style.css'
import img from './Assets/referral-user-welcome.png'
import { Link } from 'react-router-dom'
import img1 from './Assets/referral-signup-bonus-new.png'
import img2 from './Assets/banner_illsutration.png'

const Refer = () => {
  return (
    <div className='Refer mt-[60px]'>
        <div className="Refer-top">
            <img src={img} alt="" />
            <h3 className="font-bold text-[23px]">Earn now unlimited 🥳</h3>
            <p>Refer your friends now!</p>
            <h5 className="font-semibold text-[17px]">Your Refer Code: PJ1079</h5>
            <p>Total Refers: 0</p>
            <p>Total Earnings: <span className="font-semibold">₹0 <Link className="text-[blue]">Reedem</Link></span></p>
        </div>
        <div className="bg-white mt-3 p-3 border-t-[15px] border-[rgb(175, 175, 175)]">
          <h2 className="font-bold text-[20px]">Refer & Earn Rules</h2>
          <div className="flex gap-2 justify-center items-center mt-2 w-[90%]">
            <img src={img1} className="w-[82px]" alt="" />
            <div>
              <p className="text-[1rem] font-semibold text-black">When your friend signs up on https://finludo.com/ from your referral link,</p>
              <p className="text-[1rem] font-semibold text-[green]">You get 3% Commission on your referral's winnings.</p>
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center mt-4 w-[90%]">
            <img src={img2} className="w-[82px]" alt="" />
            <div>
              <p className="text-[1rem] font-semibold text-black">Suppose your referral plays a battle for ₹10000 Cash,</p>
              <p className="text-[1rem] font-semibold text-[green]">You get ₹300 Cash</p>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Refer
