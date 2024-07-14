import React from "react";
import "./App.css";
import "./index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Right from "./Components/Right";
import Support from "./Components/Support";
import Refer from "./Components/Refer";
import Transaction from "./Components/Transaction";
import Wallet from "./Components/Wallet";
import AddFund from "./Components/AddFund";
import Profile from "./Components/Profile";
import WinCash from "./Components/WinCash";
import LiteMood from "./Components/LiteMood";
import RichMood from "./Components/RichMood";
import GameHistory from "./Components/GameHistory";
import ReferalHistory from "./Components/ReferalHistory";
import Notification from "./Components/Notification";

const App = () => {
 return (
   <Router>
    <div className="body">
      <div className="left-side">
     <Navbar />
     <main className="main-content">
       <Routes>
         <Route path="/profile" element={<Profile/>}/>
         <Route path="/" element={<WinCash/>}/>
         <Route path="/support" element={<Support/>}/>
         <Route path="/refer" element={<Refer/>}/>
         <Route path="/transacion" element={<Transaction/>}/>
         <Route path="/wallet" element={<Wallet/>}/>
         <Route path="/add-fund" element={<AddFund/>}/>
         <Route path="/lite-mood" element={<LiteMood/>}/>
         <Route path="/rich-mood" element={<RichMood/>}/>
         <Route path="/game-history" element={<GameHistory/>}/>
         <Route path="/refer-history" element={<ReferalHistory/>}/>
         <Route path="/alert" element={<Notification/>}/>
         {/* Define other routes that you need*/}
       </Routes>
     </main>
     </div>
     <div className="right-side">
     <Right/>
     </div>
     </div>
   </Router>
   
 );
};

export default App;