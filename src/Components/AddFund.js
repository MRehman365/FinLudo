import {useState} from 'react'

const AddFund = () => {
    const [amount, setAmount] = useState('');

    const handleButtonClick = (value) => {
      if (value >= 10 && value <= 100000) {
        setAmount(value);
      }
    };
  
    const handleInputChange = (e) => {
      const value = parseInt(e.target.value, 10);
      if (value >= 10 && value <= 100000) {
        setAmount(value);
      } else if (isNaN(value) || value < 10) {
        setAmount('');
      }
    };
  return (
    <div className="mt-[80px]">
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 ">
      <h2 className="text-lg font-semibold">Choose amount to add</h2>
      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-zinc-700">Enter Amount</label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 border-b-1 bg-[white]  text-[gray] text-[1.5rem] font-bold">₹</span>
          <input
            type="number"
            id="amount"
            className="focus:ring-[white] focus:border-[white] border-b-1 flex-1 h-[40px] block w-full text-[gray] text-[1.5rem] font-bold"
            placeholder="Enter amount"
            value={amount}
            onChange={handleInputChange}
          />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">Min: 10, Max: 100000</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <button onClick={() => handleButtonClick(100)} className="bg-[#fafafa] text-[gray] text-[1.5rem] font-bold hover:bg-[#d3ffd3] p-4 rounded-lg border border-border">₹ 100</button>
        <button onClick={() => handleButtonClick(250)} className="bg-[#fafafa] text-[gray] text-[1.5rem] font-bold hover:bg-[#d3ffd3] p-4 rounded-lg border border-border">₹ 250</button>
        <button onClick={() => handleButtonClick(500)} className="bg-[#fafafa] text-[gray] text-[1.5rem] font-bold hover:bg-[#d3ffd3] p-4 rounded-lg border border-border">₹ 500</button>
        <button onClick={() => handleButtonClick(1000)} className="bg-[#fafafa] text-[gray] text-[1.5rem] font-bold hover:bg-[#d3ffd3] p-4 rounded-lg border border-border">₹ 1000</button>
      </div>
      <button className="bg-[#d3ffd3] text-[gray] font-bold hover:bg-primary/80 w-full py-3 rounded-lg mt-6">NEXT</button>
    </div>
    </div>
  )
}

export default AddFund
