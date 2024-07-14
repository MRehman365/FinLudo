import React from 'react'
import img from './Assets/notransactionhistory (1).png'

const ReferalHistory = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-[70px]">
      <img src={img} alt="" className="h-[200px] w-[200px]" />
      <h2 className="font-bold text-[1.2rem]">No Referral yet!</h2>
      <p className="text-[0.8rem]">Seems like you haven’t done any activity yet</p>
    </div>
  )
}

export default ReferalHistory
