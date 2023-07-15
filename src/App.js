import React, { useEffect, useState } from 'react'

function App() {
  const [num, setNum] = useState(0)
  const [nums, setNums] = useState(0)

  useEffect(() => {
    alert("Yeh !! Clicked 😃 ")
   
  },[num]);

  return (
    <div>
      <button onClick={() => {
        setNum(num + 1)
      } }
      >
        Click me {num}
      </button>
      <br/>
      <button onClick={() => {
        setNums(nums + 1)
      } }
      >
        Click me {nums}
      </button>
    </div>
  )
}

export default App