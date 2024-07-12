import React from 'react'
import './style.css'
import img from './Assets/referral-user-welcome.png'

const Refer = () => {
  return (
    <div className='Refer'>
        <div className="Refer-top">
            <img src={img} alt="" />
            <h3>Earn now unlimited 🥳</h3>
            <p>Refer your friends now!</p>
            <h5>Your Refer Code: PJ1079</h5>
            <p>Total Refers: 0</p>
            <p>Total Earnings: ₹0 Reedem</p>

        </div>
      
    </div>
  )
}

export default Refer
