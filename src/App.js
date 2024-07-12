import React from "react";
import "./App.css";
import "./index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Right from "./Components/Right";
import Support from "./Components/Support";
import Refer from "./Components/Refer";

const App = () => {
 return (
   <Router>
    <div className="body">
      <div className="left-side">
     <Navbar />
     <main className="main-content">
       <Routes>
         <Route path="/support" element={<Support/>}/>
         <Route path="/refer" element={<Refer/>}/>
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