import React from 'react'
import icon from './Assets/nogamehistory.png'

const Notification = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-[70px]">
      <img src={icon} alt="" className="h-[200px] w-[200px]" />
      <h2 className="font-bold text-[1.2rem]">No Notification yet!</h2>
      <p className="text-[0.8rem]">Seems like you haven’t played any game yet, play now to win!</p>
    </div>
  )
}

export default Notification
