import React, { useState } from "react";
import './index.css'
// import SlotM from "./SlotM";


function App() {
    let newTime = new Date().toLocaleTimeString()
    const [changeTime, setNewTime]  = useState(newTime);
   
    const upDate = () => {
        newTime = new Date().toLocaleTimeString()
        setNewTime(newTime)
    }
    
    return (
        <> 
         
            <div className="div_style">
              <h1 > {changeTime} </h1>
<button className="button" onClick={upDate}>GET TIME</button>
            </div>
        </>
    )
}

export default App

