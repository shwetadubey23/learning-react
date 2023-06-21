import React, { useState } from "react";

import './index.css';

const App = () => {
    let time = new Date().toLocaleTimeString()
const [currentTime, setTime] = useState(time)

const updateTime = () => {
    time = new Date().toLocaleTimeString()
    setTime(time)
}

setInterval(updateTime, 1000)
    return (
        <>
        <h1 className="h1_style"> {currentTime} </h1>
        </>
    )
}

export default App