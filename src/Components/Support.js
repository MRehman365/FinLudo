import React from 'react'
import img from './Assets/contact_us.png'
import watsapp from './Assets/png-clipart-whatsapp-logo-whatsapp-logo-desktop-computer-icons-viber-grass-viber.png'
import './style.css'
import { Link } from 'react-router-dom'

const Support = () => {
  return (
    <div className='support'>
      <img src={img} alt="" />
      <h3>Support timing (24*7)</h3>
      <h3>(Monday to Ssanday (All time))</h3>
      <Link><img src={watsapp} alt="" />chat with us on whatsapp (Can i help you?)</Link>
    </div>
  )
}

export default Support
