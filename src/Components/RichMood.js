import React, { useState } from 'react';
import img from './Assets/global-battleIconWhiteStroke.png'
import money from './Assets/global-rupeeIcon.png'
import vs from './Assets/versus.png'
import profile from './Assets/Avatar2.png'
import loader from './Assets/download.gif'
import { IoMdInformationCircle } from "react-icons/io";

const RichMood = () => {
    const [battles, setBattles] = useState([]);
    const [amount, setAmount] = useState('');
  
    const handleAddBattle = () => {
      if (amount && !isNaN(amount)) {
        const newBattle = {
          id: Date.now(),
          entryFee: Number(amount),
          prize: Number(amount) * 1.7,
          challenger: 'SD', // Example challenger
        };
        setBattles([...battles, newBattle]);
        setAmount('');
      }
    };
  
    const handleDeleteBattle = (id) => {
      setBattles(battles.filter((battle) => battle.id !== id));
    };
  return (
    <div>
      <div className="p-4 space-y-4 mt-[60px]">
        <h2 className="text-center text-[gray] text-[1rem]">Create a battle</h2>
      <div className="flex items-center space-x-2">
        <input
        min="1000"
        max="50000"
          type="number"
          placeholder="Amount"
          className="border border-zinc-300 rounded p-2 flex-grow"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleAddBattle} className="bg-green-500 text-white px-4 py-2 rounded">
          SET
        </button>
      </div>
      <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <img src={img} className="w-[20px]" alt="" />
              <h2 className="text-lg font-semibold text-foreground">Open Battles</h2>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground">RULES</span>
              <IoMdInformationCircle />
            </div>
          </div>
      {battles.map((battle) => (
        <div key={battle.id} className="bg-[#fcf7ff] border-[#e3b3ff] rounded shadow">
          
          <div className="bg-secondary rounded space-y-1">
            <div className="flex justify-between items-center border-b-2 py-1 px-3">
              <span className="text-muted-foreground text-[0.8rem]">
                CHALLENGE FROM <span className="text-destructive">{battle.challenger}</span>
              </span>
              <button className="bg-[#dc3545] text-white text-[0.8rem] text-destructive-foreground px-2 py-1 rounded" onClick={() => handleDeleteBattle(battle.id)}>
                DELETE
              </button>
            </div>
            <div className="flex justify-between items-center text-muted-foreground px-3">
                <div className="flex gap-4">
                <div className="flex flex-col items-center space-x-1">
                <span className="text-[0.8rem]">ENTRY FEE</span>
                <span className="text-primary flex"><img src={money} className="w-[20px]" alt="" /> {battle.entryFee}</span>
              </div>
              <div className="flex flex-col items-center space-x-1">
                <span className="text-[0.8rem]">PRIZE</span>
                <span className="text-primary flex"><img src={money} className="w-[20px]" alt="" /> {battle.prize}</span>
              </div>
                </div>
              <div className="flex flex-col items-center">
                <img src={loader} className="w-[20px]" alt="" />
              <span className="text-[0.8rem]">Finding Player!</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className=" p-4 rounded shadow">
        <div className="flex items-center space-x-2 mb-2">
        <img src={img} className="w-[20px]" alt="" />
          <h2 className="text-lg font-semibold text-foreground">Running Battles</h2>
        </div>
        <div className="bg-[#fcf7ff] border border-[#e3b3ff] rounded space-y-2">
          <div className="flex justify-between items-center border-b-2 p-1">
            <div className="flex items-center space-x-1">
              <span className="text-[0.8rem]">PLAYING FOR</span>
              <span className="text-[0.8rem] flex"><img src={money} className="w-[20px]" alt="" /> 100</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-[0.8rem]">PRIZE</span>
              <span className="text-[0.8rem] flex"><img src={money} className="w-[20px]" alt="" /> 195</span>
            </div>
          </div>
          <div className="flex justify-between items-center px-3">
            <div className="flex items-center space-x-2">
              <img src={profile} alt="player1-avatar" className="rounded-full w-[25px]" />
              <span className="text-[0.8rem]">MG5WA227</span>
            </div>
            <img src={vs} className="w-[25px]" alt="battle-icon" />
            <div className="flex items-center space-x-2">
              <img src={profile} alt="player2-avatar" className="rounded-full w-[25px]" />
              <span className="text-[0.8rem]">4ZHMO128</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default RichMood
