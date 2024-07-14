import React from 'react'

const transactions = [
  {
    date: "04 Jul",
    time: "04:02 AM",
    description: "Chips added By Admin Added in Wallet",
    orderId: "order_9491883395",
    amount: 10000,
  },
  {
    date: "04 Jul",
    time: "04:02 AM",
    description: "Chips added By Admin Added in Wallet",
    orderId: "order_9491883395",
    amount: 10000,
  },
];
const Transaction = () => {
  return (
    <div className=" flex mt-[60px] pt-2 justify-center">
    <div className="w-full mx-auto bg-white shadow-md rounded-lg">
      {transactions.map((transaction, index) => (
        <div key={index} className="flex justify-between items-center border-b p-2">
          <div className="text-center">
            <div className="text-gray-600 font-semibold text-[0.8rem]">{transaction.date}</div>
            <div className="text-gray-400 text-[0.8rem]">{transaction.time}</div>
          </div>
          <div className="flex-1 mx-4">
            <div className="text-black text-[0.8rem] font-semibold">{transaction.description}</div>
            <div className="text-gray-500 text-[0.6rem]">Order ID: {transaction.orderId}</div>
          </div>
          <div className="" >
            <span className="text-[gray] text-[0.8rem] "><span className=" text-[0.8rem] text-green-500">(+)</span>{transaction.amount}</span>
            <p className="text-[gray] text-[0.8rem] text-center">Balance</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Transaction
